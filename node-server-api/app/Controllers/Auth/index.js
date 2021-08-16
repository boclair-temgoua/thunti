const Validator = require('fastest-validator');
const bcrypt = require('bcryptjs');
const mySlug = require('slug');
const models = require('../../../models');
const { makeSluginID } = require('../../../helper/utils');
const emailSend = require('../../Mail/Auth/newUserMail');
const { loginService } = require('./services/login-service');
const { resetpasswordService } = require('./services/resetpassword-service');
const { resetpasswordUpdateService } = require('./services/resetpassword-update-service');

/** Register fuction */
const register = async (req, res) => {
  const {
    lastName,
    firstName,
    email,
    password,
    confirmPassword,
  } = req.body;

  try {
    const user = await models.user.findOne({ where: { email } });
    if (user) {
      return res.status(400).json({ message: `This ${user.email} exist` });
    }

    const item = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    };

    const schema = {
      firstName: { type: 'string', min: 3, max: 200 },
      email: { type: 'email', min: 8, max: 200 },
      password: { type: 'string', min: 3, max: 200 },
      confirmPassword: { type: 'equal', field: 'password' },
    };

    const v = new Validator();
    const validationResponse = v.validate(item, schema);

    if (validationResponse !== true) {
      res.status(400).json({ errors: validationResponse });
    }

    if (validationResponse === true) {
      const hashedPsw = await bcrypt.hash(password, 12);
      const userRecev = await models.user.create({
        firstName,
        lastName,
        username: `${mySlug(firstName + lastName)}-${makeSluginID(8)}`,
        email,
        password: hashedPsw,
        providerToken: makeSluginID(35),
        slug: makeSluginID(20),
      });
      if (userRecev) {
        await models.profile.create({
          slug: userRecev.slug,
          userId: userRecev.id,
        });

        /** Default user */
        emailSend.emailUseMail(userRecev);
        return res.status(200).json({
          message: 'Register pass succesfuly',
        });
      }
      return res.status(400).json({ message: 'Incorrect data' });
    }
    return res.status(400).json({
      errors: validationResponse,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Server Error',
      error,
    });
  }
};

/** Login function */
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    return loginService(req, res, email, password);
  } catch (error) {
    return res.status(500).json({
      message: 'Identifiant incorrect',
      error,
    });
  }
};

const resetpassword = async (req, res) => {
  const { email } = req.body;

  try {
    return resetpasswordService(req, res, email);
  } catch (error) {
    return res.status(500).json({
      message: 'Identifiant incorrect',
      error,
    });
  }
};

const resetpasswordupdate = async (req, res) => {
  const {
    password,
    confirmPassword,
  } = req.body;

  try {
    const schema = {
      password: { type: 'string', min: 3, max: 200 },
      confirmPassword: { type: 'equal', field: 'password' },
    };

    const item = {
      password,
      confirmPassword,
    };

    const v = new Validator();
    const validationResponse = v.validate(item, schema);

    if (validationResponse !== true) {
      res.status(400).json({ errors: validationResponse });
    }

    if (validationResponse === true) {
      return resetpasswordUpdateService(req, res, item);
    }
    return res.status(400).json({
      errors: validationResponse,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Identifiant incorrect',
      error,
    });
  }
};

module.exports = {
  register,
  login,
  resetpassword,
  resetpasswordupdate,
};
