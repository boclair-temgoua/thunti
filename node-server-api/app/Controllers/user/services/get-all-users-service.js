const { Op } = require('sequelize');
const models = require('../../../../models');

const getallusersService = async (req, res) => {
  const users = await models.user.findAll({
    attributes: ['email', 'firstName', 'lastName', 'username', 'avatar', 'createdAt'],
    include: [
      {
        model: models.profile,
        attributes: ['slug', 'userId'],
      },
    ],
    order: [
      ['createdAt', 'DESC'],
    ],
  });
  return res.status(200).json(users);
};

const getalluserssearchService = async (req, res) => {
  const { filterQuery } = req.query;
  const users = await models.user.findAll({
    where: {
      [Op.or]: [
        { email: { [Op.like]: `%${filterQuery}` } },
        { firstName: { [Op.like]: `%${filterQuery}` } },
        { lastName: { [Op.like]: `%${filterQuery}` } },
        { username: { [Op.like]: `%${filterQuery}` } },
      ],
    },
    attributes: ['email', 'firstName', 'lastName', 'username', 'avatar', 'createdAt'],
    include: [
      {
        model: models.profile,
        attributes: ['slug', 'userId'],
      },
    ],
    order: [
      ['createdAt', 'DESC'],
    ],
  });
  return res.status(200).json(users);
};
module.exports = { getallusersService, getalluserssearchService };
