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
          user_id: 1,
          week_id: 1,
          workout_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Squat",
          sets: 3,
          reps: 12,
          weight: 240,
          day_id: 1,
          user_id: 1,
          week_id: 1,
          workout_id: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('workout', null, {})
  }
};
