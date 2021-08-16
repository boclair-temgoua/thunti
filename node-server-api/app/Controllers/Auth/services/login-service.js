const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const models = require('../../../../models');
const emailSend = require('../../../Mail/Auth/newUserMail');

/** Login function */
const loginService = async (req, res, email, password) => {
  const user = await models.user.findOne({
    where: { email },
  });
  if (!user) {
    return res.status(400).json({ message: 'E-mail or password incorrect' });
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'E-mail or password incorrect' });
  }

  const itemUser = {
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    sex: user.sex,
    email: user.email,
    slug: user.slug,
    avatar: user.avatar,
    userId: user.id,
  };

  const token = jwt.sign(itemUser, process.env.JWT_KEY, {
    expiresIn: process.env.JWT_EXPIRE,
  });

  emailSend.emailUseMail(user);
  return res.status(200).json({ accessToken: token });
};

module.exports = { loginService };
