const models = require('../../../../models');

const usershowService = async (req, res) => {
  const user = await models.user.findOne({
    where: { slug: req.params.user },
    attributes: ['email', 'firstName', 'lastName', 'username', 'avatar'],
    include: [
      {
        model: models.profile,
        attributes: ['slug', 'userId'],
      },
    ],
  });
  return res.status(200).json(user);
};

module.exports = { usershowService };
