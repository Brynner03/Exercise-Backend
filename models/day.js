'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Day extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Day.belongsTo(models.Week, {
        as: 'weeks',
        foreignKey: 'week_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
      Day.belongsTo(models.User, {
        as: 'users',
        foreignKey: 'user_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
      Day.hasMany(models.Workout, {
        as: 'workoutForDay',
        foreignKey: 'day_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      })
    }
  }
  Day.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    workout_id:{
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      reference: {
        model: 'workout',
        key: 'id'
      }
    },
    week_id: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      reference: {
        model: 'week',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      reference: {
        model: 'user',
        key: 'id'
      }
    },
    day_id: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Day',
    tableName: 'day'
  });
  return Day;
};