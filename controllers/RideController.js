const Op = require('sequelize').Op;
const Model = require('../models');

const RideSharing = Model.RideSharing;
const RequestForRide = Model.RequestForRide;

class RideController {

  static createRideSharing(req, res) {
    RideSharing.create(
      RideSharing.formatCreateRequest(req)
    )
      .then(data => {
        res.status(201).json({
          message: 'Success to create Ride Sharing',
          data: data.dataValues
        });
      })
      .catch(err => {
        res.status(500).json({
          message: 'Failed to create Ride Sharing',
          error: err
        });
      })
  }

  static listRideSharing(req, res) {
    RideSharing.findAll({
      where: {
        statusId: 1,
        departureDate: {
          [Op.between]: [req.query.fromDate, req.query.toDate]
        }
      }
    })
      .then(listRideSharing => {
        const payload = listRideSharing.map(data => {
          return RideSharing.formattedReturnList(data.dataValues)
        });
        res.status(200).json({
          message: 'Success to get List Ride Sharing',
          data: payload
        });
      })
      .catch(err => {
        res.status(500).json({
          message: 'Failed to get List Ride Sharing',
          error: err
        });
      });
  }

  static detailRideSharing(req, res) {
    RideSharing.find({
      where: {
        id: req.params.idRideSharing
      },
      include: [
        {
          model: Model.User,
          required: true,
          include: [
            {
              model: Model.Vehicle,
              required: true,
              include: [
                {
                  model: Model.VehicleType,
                  required: true
                }
              ]
            }
          ]
        },
        {
          model: Model.Status,
          required: true
        }
      ]
    })
      .then(data => {
        res.status(200).json({
          message: 'Success to get data Detail Ride Sharing',
          data: RideSharing.formattedDetail(data.dataValues)
          // data: data.dataValues
        });
      })
      .catch(err => {
        res.status(500).json({
          message: 'Failed to get data Detail Ride Sharing',
          error: err
        });
      });
  }

  static requestRide(req, res) {
    RequestForRide.create(
      RequestForRide.formatCreateRequest(req)
    )
      .then(data => {
        res.status(201).json({
          message: 'Success to create Request Ride Sharing',
          data: data.dataValues
        });
      })
      .catch(err => {
        res.status(500).json({
          message: 'Failed to create Request Ride Sharing',
          error: err
        });
      });
  }

  static approveRequestRide(req, res) {
    let isApprove = req.body.approve;

    let arrPromise = [
      RideSharing.findOne({ id: req.body.rideSharingId }),
      RequestForRide.findOne({ id: req.body.requestForRideId })
    ]

    Promise.all(arrPromise)
      .then(data => {
        let RideSharingData = data[0];
        let RequestForRideData = data[1];

        if (isApprove) {
          RideSharingData.updateAttributes({
            statusId: 2 // Waiting Departure Time
          });

          RequestForRideData.updateAttributes({
            statusId: 7 // Waiting Departure Time
          });
        }
        else {
          RequestForRideData.updateAttributes({
            statusId: 9 // Reject
          });
        }

        res.status(200).json({
          message: 'Success to update Data'
        });
      })
      .catch(err => {
        res.status(500).json({
          message: 'Failed to find data',
          error: err
        });
      })
  }

  static checkStatus(req, res) {
    RequestForRide.findOne({
      where: {
        id: req.params.idRequestRide
      },
      include: [
        {
          model: Model.User,
          required: true,
          include: [
            {
              model: Model.Vehicle,
              required: true,
              include: [
                {
                  model: Model.VehicleType,
                  required: true
                }
              ]
            }
          ]
        },
        {
          model: Model.Status,
          required: true
        },
        {
          model: Model.RideSharing,
          required: true,
          include: [
            {
              model: Model.User,
              required: true,
              include: [
                {
                  model: Model.Vehicle,
                  required: true,
                  include: [
                    {
                      model: Model.VehicleType,
                      required: true
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    })
      .then(data => {
        res.status(200).json({
          message: 'Success to Get data',
          // data: data.dataValues
          data: RequestForRide.formattedResponse(data.dataValues)
        });
      })
      .catch(err => {
        res.status(500).json({
          message: 'Failed to Get data',
          error: err
        });
      })
  }
}

module.exports = RideController;