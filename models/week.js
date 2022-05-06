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
    }
  }
  Week.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Week',
    tableName: 'weeks'
  });
  return Week;
};