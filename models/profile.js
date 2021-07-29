const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class profile extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static async associate(models) {
      // define association here
      await profile.belongsTo(models.user, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  profile.init({
    slug: DataTypes.STRING,
    countryId: DataTypes.INTEGER.UNSIGNED,
    userId: DataTypes.INTEGER.UNSIGNED,
  }, {
    sequelize,
    modelName: 'profile',
  });
  return profile;
};
