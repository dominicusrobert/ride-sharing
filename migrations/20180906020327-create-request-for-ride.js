'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('RequestForRides', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'id'
        },
      },
      rideSharingId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'RideSharings',
          key: 'id'
        },
      },
      statusId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Statuses',
          key: 'id'
        },
      },
      pickupLat: {
        type: Sequelize.DOUBLE
      },
      pickupLong: {
        type: Sequelize.DOUBLE
      },
      pickupNote: {
        type: Sequelize.STRING
      },
      seatRequest: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('RequestForRides');
  }
};