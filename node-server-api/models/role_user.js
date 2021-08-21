/* eslint-disable camelcase */
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class role_user extends Model {
    /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
    static async associate(models) {
      // define association here

      await role_user.belongsTo(models.user, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });

      await role_user.belongsTo(models.role, {
        foreignKey: 'roleId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  role_user.init({
    userId: DataTypes.INTEGER.UNSIGNED,
    roleId: DataTypes.INTEGER.UNSIGNED,
  }, {
    sequelize,
    modelName: 'role_user',
  });
  return role_user;
};
