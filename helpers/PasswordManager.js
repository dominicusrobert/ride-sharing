const bcrypt = require('bcrypt');
const saltRounds = 10;

class HelperPassword {

  static encrypt(plainPassword) {
    return new Promise(function (resolve, reject) {
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(plainPassword, salt, function (err, hash) {
          if (err) reject(err);
          else resolve(hash);
        });
      });
    })
  }

  static decrypt(plainPassword, hashedPassword) {
    return new Promise(function (resolve, reject) {
      bcrypt.compare(plainPassword, hashedPassword, function (err, res) {
        if (err) reject(err)
        else resolve(res); // res === true
      });
    });
  }

}

module.exports = HelperPassword;