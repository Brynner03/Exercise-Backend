'use strict';
const {
  Model
} = require('sequelize');
const users = require('./users');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Week, {
        as: 'weeks',
        foreignKey: 'week_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      User.hasMany(models.Workout, {
        as: 'workouts',
        foreignKey: 'workout_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      User.hasMany(models.Day, {
        as: 'days',
        foreignKey: 'day_id',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  User.init({
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    day_id: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
      reference: {
        model: 'day',
        key: 'id'
      }
    },
    week_id: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      onUPDATE: 'CASCADE',
      reference: {
        model: 'week',
        key: 'id'
      }
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
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'user'
  });
  return User;
};