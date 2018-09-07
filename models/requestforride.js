'use strict';
module.exports = (sequelize, DataTypes) => {
  var RequestForRide = sequelize.define('RequestForRide', {
    userId: DataTypes.INTEGER,
    rideSharingId: DataTypes.INTEGER,
    statusId: DataTypes.INTEGER,
    pickupLat: DataTypes.DOUBLE,
    pickupLong: DataTypes.DOUBLE,
    pickupNote: DataTypes.STRING,
    seatRequest: DataTypes.INTEGER
  });

  RequestForRide.associate = function (models) {
    RequestForRide.belongsTo(
      models.User,
      {
        foreignKey: 'userId',
        sourceKey: 'id'
      }
    );

    RequestForRide.belongsTo(
      models.RideSharing,
      {
        foreignKey: 'rideSharingId',
        sourceKey: 'id'
      }
    );

    RequestForRide.belongsTo(
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

  RequestForRide.formatCreateRequest = function (req) {
    return {
      userId: req.headers.userId,
      rideSharingId: req.params.idRideSharing,

      statusId: 6, // Waiting for approval

      pickupLat: req.body.pickupLat,
      pickupLong: req.body.pickupLong,
      pickupNote: req.body.pickupNote,
      seatRequest: req.body.seatRequest
    }
  }

  RequestForRide.formattedResponse = function (dataValues) {
    return {

      id: dataValues.id,

      RequestForRideData: {
        pickupLat: dataValues.pickupLat,
        pickupLong: dataValues.pickupLong,
        pickupNote: dataValues.pickupNote,
        seatRequest: dataValues.seatRequest,
      },
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
        departureDate: dataValues.RideSharing.departureDate,
        departureTime: dataValues.RideSharing.departureTime,
        fromLat: dataValues.RideSharing.fromLat,
        fromLong: dataValues.RideSharing.fromLong,
        toLat: dataValues.RideSharing.toLat,
        toLong: dataValues.RideSharing.toLong,
        price: dataValues.RideSharing.price,
        notes: dataValues.RideSharing.notes
      }

    }
  }
  return RequestForRide;
};