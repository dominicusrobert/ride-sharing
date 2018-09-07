'use strict';
module.exports = (sequelize, DataTypes) => {
  var Vehicle = sequelize.define('Vehicle', {
    userId: DataTypes.INTEGER,
    vehicleTypeId: DataTypes.INTEGER,
    brand: DataTypes.STRING,
    licensePlate: DataTypes.STRING,
    color: DataTypes.STRING
  });


  Vehicle.associate = function (models) {
    Vehicle.belongsTo(
      models.VehicleType,
      {
        foreignKey: 'vehicleTypeId',
        sourceKey: 'id'
      }
    );
  }


  return Vehicle;
};