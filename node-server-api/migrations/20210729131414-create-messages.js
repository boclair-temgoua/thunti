module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      subject: { type: Sequelize.TEXT },
      content: { type: Sequelize.TEXT },
      userId: {
        type: Sequelize.DataTypes.INTEGER.UNSIGNED,
        references: {
          model: {
            tableName: 'users',
            schema: 'schema',
          },
          key: 'id',
        },
        allowNull: true,
      },
      statusRed: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
      isDelete: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
      threadId: { type: Sequelize.STRING },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('messages');
  },
};
