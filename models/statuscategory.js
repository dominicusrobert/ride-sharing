'use strict';
module.exports = (sequelize, DataTypes) => {
  var StatusCategory = sequelize.define('StatusCategory', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return StatusCategory;
};