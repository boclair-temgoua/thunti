const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static async associate(models) {
      // define association here
      await message.belongsTo(models.user, {
        as: 'userfrom',
        foreignKey: 'userfromId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        // constraints: false,
      });

      await message.belongsTo(models.user, {
        as: 'userto',
        foreignKey: 'usertoId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }

  message.init({
    content: DataTypes.TEXT,
    ip: DataTypes.STRING,
    userfromId: DataTypes.INTEGER.UNSIGNED,
    usertoId: DataTypes.INTEGER.UNSIGNED,
    isDelete: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    statusRed: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
  }, {
    sequelize,
    modelName: 'message',
  });
  return message;
};
