'use strict';
module.exports = (sequelize, DataTypes) => {
  var RideSharing = sequelize.define('RideSharing', {
    userId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    departureDate: DataTypes.DATEONLY,
    departureTime: DataTypes.TIME,
    fromLat: DataTypes.DOUBLE,
    fromLong: DataTypes.DOUBLE,
    toLat: DataTypes.DOUBLE,
    toLong: DataTypes.DOUBLE,
    seatLeft: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    notes: DataTypes.STRING
  });

  /**
   * Association
   */

  RideSharing.associate = function (models) {
    RideSharing.belongsTo(
      models.User,
      {
        foreignKey: 'userId',
        sourceKey: 'id'
      }
    );

    RideSharing.belongsTo(
      models.Status,
      {
        foreignKey: 'statusId',
        sourceKey: 'id'
      }
    );
  }

  /**
   * Class Method Collection
   */

  RideSharing.formatCreateRequest = function (req) {
    return {
      userId: req.headers.userId,
      statusId: 1, // Open for share riding
      departureDate: req.body.departureDate,
      departureTime: req.body.departureTime,

      fromLat: req.body.fromLat,
      fromLong: req.body.fromLong,
      toLat: req.body.toLat,
      toLong: req.body.toLong,
      seatLeft: req.body.seatLeft,
      price: req.body.price,
      notes: req.body.notes
    }
  }

  RideSharing.formattedReturnList = function (dataValues) {
    return {
      id: dataValues.id,
      departureDate: dataValues.departureDate,
      departureTime: dataValues.departureTime,
      fromLat: dataValues.fromLat,
      fromLong: dataValues.fromLong,
      toLat: dataValues.toLat,
      toLong: dataValues.toLong,
      seatLeft: dataValues.seatLeft,
      price: dataValues.price,
      notes: dataValues.notes
    }
  }


  RideSharing.formattedDetail = function (dataValues) {
    return {
      id: dataValues.id,
      Status: {
        id: dataValues.Status.id,
        name: dataValues.Status.name,
        description: dataValues.Status.description,
      },
      RiderData: {
        id: dataValues.User.id,
        username: dataValues.User.username,
        phoneNumber: dataValues.User.phoneNumber
      },
      VehicleData: {
        brand: dataValues.User.Vehicle.brand,
        licensePlate: dataValues.User.Vehicle.licensePlate,
        color: dataValues.User.Vehicle.color,
        VehicleType: dataValues.User.Vehicle.VehicleType.name 
      },
      RideSharingData: {
        departureDate: dataValues.departureDate,
        departureTime: dataValues.departureTime,
        fromLat: dataValues.fromLat,
        fromLong: dataValues.fromLong,
        toLat: dataValues.toLat,
        toLong: dataValues.toLong,
        price: dataValues.price,
        notes: dataValues.notes
      }
    }
  }

  return RideSharing;
};