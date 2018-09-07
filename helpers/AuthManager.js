const jwt = require('jsonwebtoken');


class AuthManager {

  static Authentication(request, response, next) {
    var dateNow = new Date();

    jwt.verify(
      request.headers['access-token'],
      process.env.SECRET_KEY_JWT,
      function (err, decoded) {

        if (decoded && decoded.exp * 1000 > dateNow.getTime()) {
          // add userId & other data (decoded from JWT) through request.headers
          request.headers.userId = decoded.userId;
          next();
        }
        else if (decoded.exp * 1000 < dateNow.getTime()) {
          response.status(401).json({ message: 'Token is expired, please re-login' });
        }
        else {
          response.status(401).json({ message: 'Invalid Credential' });
        }
      });
  }

}

module.exports = AuthManager;