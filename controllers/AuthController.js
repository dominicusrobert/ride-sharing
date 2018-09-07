const AuthManager = require('../helpers/AuthManager.js');
const Model = require('../models');

const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;


const PasswordManager = require('../helpers/PasswordManager')

class AuthController {

  static Login(req, res) {

    Model.User.findOne(
      { where: { email: req.body.email } }
    )
      .then(userData => {

        PasswordManager.decrypt(req.body.password, userData.dataValues.password)
          .then(isValidPassword => {
            if (isValidPassword) {
              let token = jwt.sign(
                { userId: userData.dataValues.id },
                process.env.SECRET_KEY_JWT,
                { expiresIn: 60 * 60 } // 1 hour
              );

              res.status(200).json({
                message: 'Success Login',
                data: {
                  jwt: token
                }
              });
            }
            else {
              res.status(401).json({
                message: 'Failed to Login',
              });
            }
          })
      })
      .catch(err => {
        res.status(404).json({
          message: 'User Not found',
          error: err
        });
      });

  }

}

module.exports = AuthController;  