const Validator = require('fastest-validator');
const bcrypt = require('bcryptjs');
const mySlug = require('slug');
const models = require('../../../models');
const { makeSluginID } = require('../../../helper/utils');

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

module.exports = {
  register,
};
