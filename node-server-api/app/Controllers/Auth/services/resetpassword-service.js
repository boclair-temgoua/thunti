const { makeSluginID } = require('../../../../helper/utils');
const models = require('../../../../models');
const emailSend = require('../../../Mail/Auth/newUserMail');

/** reset password function */
const resetpasswordService = async (req, res, email) => {
  const user = await models.user.findOne({
    where: { email },
  });
  if (!user) {
    return res.status(400).json({ message: 'Information incorrect' });
  }

  const userRecev = await models.passwordreset.create({
    email,
    token: makeSluginID(35),
  });
  //   emailSend.emailUseMail(user);
  return res.status(200).json({
    message: 'Email send succesfuly',
  });
};

module.exports = { resetpasswordService };
