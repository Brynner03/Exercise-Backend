'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('day',
      [
        {
          name: 'Push',
          workout_id: 2,
          week_id: 1,
          user_id: 1,
          day_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Pull",
          workout_id: 3,
          week_id: 1,
          user_id: 1,
          day_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('day', null, {})
  }
};
