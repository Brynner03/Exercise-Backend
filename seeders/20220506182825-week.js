'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('weeks',
      [
        {
          name: 'Week 1',
          user_id: 1,
          day_id: 1,
          workout_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Week 2",
          user_id: 1,
          day_id: 1,
          workout_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('weeks', null, {})
  }
};
