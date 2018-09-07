const express = require('express');

const RideController = require('../controllers/RideController.js');
const AuthManager = require('../helpers/AuthManager.js');

const router = express.Router();


router.post(
  '/create-ride-sharing',
  AuthManager.Authentication,
  RideController.createRideSharing
);

router.get(
  '/list-ride-sharing',
  AuthManager.Authentication,
  RideController.listRideSharing
);

router.get(
  '/ride-sharing/detail/:idRideSharing',
  AuthManager.Authentication,
  RideController.detailRideSharing
);

router.post(
  '/request-ride/:idRideSharing',
  AuthManager.Authentication,
  RideController.requestRide
);

router.put(
  '/request-ride/approval',
  AuthManager.Authentication,
  RideController.approveRequestRide
);

router.get(
  '/checkStatus/:idRequestRide',
  AuthManager.Authentication,
  RideController.checkStatus
);


module.exports = router;