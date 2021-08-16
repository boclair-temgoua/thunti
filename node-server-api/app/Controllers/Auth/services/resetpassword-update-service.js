const bcrypt = require('bcryptjs');
const models = require('../../../../models');

/** reset password function */
const resetpasswordUpdateService = async (req, res, item) => {
  const passwordreset = await models.passwordreset.findOne({
    where: { token: req.params.resetpassword },
  });
  if (!passwordreset) {
    return res.status(400).json({ message: 'Information incorrect' });
  }
  const user = await models.user.findOne({
    where: { email: passwordreset.email },
  });
  if (!user) {
    return res.status(400).json({ message: 'Information incorrect' });
  }
  const hashedPsw = await bcrypt.hash(item.password, 12);
  const userRecev = await user.update({
    password: hashedPsw,
  });
  if (!userRecev) {
    return res.status(400).json({ message: 'Information incorrect' });
  }
  await passwordreset.destroy();
  return res.status(200).json({
    message: 'Password send succesfuly',
  });
};

module.exports = { resetpasswordUpdateService };
