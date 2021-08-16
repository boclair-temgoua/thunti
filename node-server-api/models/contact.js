const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class contact extends Model {
    /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
    static async associate(models) {
      // define association here
      await contact.belongsTo(models.user, {
        foreignKey: 'userId',
        // onDelete: 'CASCADE',
        // onUpdate: 'CASCADE',
        constraints: false,
      });
    }
  }

  contact.init({
    subject: DataTypes.TEXT,
    content: DataTypes.TEXT,
    threadId: DataTypes.STRING,
    userId: DataTypes.INTEGER.UNSIGNED,
    isDelete: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
    statusRed: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
  }, {
    sequelize,
    modelName: 'contact',
  });
  return contact;
};
