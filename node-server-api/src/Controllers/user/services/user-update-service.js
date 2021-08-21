const models = require('../../../../models');

const usersupdateService = async (req, res) => {
  const user = await models.user.findOne({
    where: { slug: req.params.user },
  });
  if (!user) {
    return res.status(400).json({ message: 'Information incorrect' });
  }
  console.log('user ======>', user);
  return res.status(200).json(user);
};

module.exports = { usersupdateService };
