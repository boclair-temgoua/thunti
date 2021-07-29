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
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        constraints: false,
      });
    }
  }

  message.init({
    content: DataTypes.TEXT,
    threadId: DataTypes.STRING,
    userId: DataTypes.INTEGER.UNSIGNED,
    statusRed: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
  }, {
    sequelize,
    modelName: 'message',
  });
  return message;
};
