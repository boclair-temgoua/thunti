const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class role extends Model {
    /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
    static async associate(models) {
      // define association here
    //   await role.belongsTo(models.user, {
    //     foreignKey: 'userId',
    //     onDelete: 'CASCADE',
    //     onUpdate: 'CASCADE',
    //   });

      await role.belongsToMany(models.user, {
        through: models.role_user,
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }

  role.init({
    name: DataTypes.STRING,
    label: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'role',
  });
  return role;
};
