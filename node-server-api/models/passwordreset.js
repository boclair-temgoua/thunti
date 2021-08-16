const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class passwordreset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static async associate(models) {
      // define association here
    }
  }
  passwordreset.init({
    email: DataTypes.STRING,
    token: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'passwordreset',
  });
  return passwordreset;
};
