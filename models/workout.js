'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Workout.belongsTo(models.Day, {
        as: 'dayWorkout',
        foreignKey: 'day_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Workout.belongsTo(models.User, {
        as: 'userWorkout',
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
      Workout.belongsTo(models.Week, {
        as: 'weekWorkout',
        foreignKey: 'week_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Workout.init({
    name: DataTypes.STRING,
    sets: DataTypes.INTEGER,
    reps: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    day_id: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      reference: {
        model: 'Day',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      reference: {
        model: 'User',
        key: 'id'
      }
    },
    week_id: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      reference: {
        model: 'Week',
        key: 'id'
      }
    },
    workout_id: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      reference: {
        model: 'Workout',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Workout',
    tableName: 'workout'
  });
  return Workout;
};