'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Week extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Week.hasMany(models.Day, {
        as: 'day',
        foreignKey: 'day_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
      Week.belongsTo(models.User, {
        as: 'users',
        foreignKey: 'week_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
      Week.hasMany(models.Workout, {
        as: 'workouts',
        foreignKey: 'workout_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Week.init({
    name: DataTypes.STRING,
    user_id: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      reference: {
        model: 'user',
        key: 'id'
      },
      day_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        reference: {
          model: 'day',
          key: 'id'
        }
      }, 
      workout_id: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        reference: {
          model: 'workout',
          key: 'id'
        }
      }
    } 
  },
    {
    sequelize,
    modelName: 'Week',
    tableName: 'weeks'
  });
  return Week;
};