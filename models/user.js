'use strict';

const PasswordManager = require('../helpers/PasswordManager')

module.exports = (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING,
    phoneNumber: DataTypes.STRING
  });


  User.associate = function (models) {
    User.hasOne(
      models.Vehicle,
      {
        foreignKey: 'userId',
        sourceKey: 'id'
      }
    );
  }


  User.beforeCreate(user => {
    return PasswordManager.encrypt(user.password)
      .then(hashPassword => {
        user.password = hashPassword;
      })
      .catch( err =>{
        throw new Error (err);
      });
  })
  return User;
};