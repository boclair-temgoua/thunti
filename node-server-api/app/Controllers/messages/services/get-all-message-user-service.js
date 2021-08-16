const models = require('../../../../models');

const getallmessageuserService = async (req, res) => {
  const messages = await models.message.findAll({
    attributes: ['content', 'userfromId', 'usertoId', 'createdAt', 'statusRed'],
    include: [
      {
        model: models.user,
        as: 'userfrom',
        where: { slug: req.params.userfrom },
        attributes: ['email', 'firstName', 'lastName', 'username', 'avatar', 'slug'],
      },
      {
        model: models.user,
        as: 'userto',
        where: { slug: req.params.userto },
        attributes: ['email', 'firstName', 'lastName', 'username', 'avatar', 'slug'],
      },
    ],
  });
  return res.status(200).json(messages);
};

module.exports = { getallmessageuserService };
