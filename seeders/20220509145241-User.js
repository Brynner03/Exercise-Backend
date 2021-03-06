'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users',
      [
        {
          userName: 'Benchy',
          password: 'test',
          day_id: 1,
          week_id: 1,
          workout_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
