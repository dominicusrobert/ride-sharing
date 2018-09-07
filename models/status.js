'use strict';
module.exports = (sequelize, DataTypes) => {
  var Status = sequelize.define('Status', {
    statusCategoryId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Status;
};