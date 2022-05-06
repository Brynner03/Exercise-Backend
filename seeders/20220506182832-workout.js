'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('workout',
      [
        {
          name: 'Bench Press',
          sets: 3,
          reps: 12,
          weight: 150,
          day_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          name: "Squat",
          sets: 3,
          reps: 12,
          weight: 240,
          day_id: 1,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('workout', null, {})
  }
};
