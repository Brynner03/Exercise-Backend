'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('weeks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      day_id: {
        type: Sequelize.INTEGER
      },
      workout_id: {
        type: Sequelize.INTEGER
      },
      week_id: {
       type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('weeks');
  }
};