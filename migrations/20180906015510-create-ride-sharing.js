'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('RideSharings', {
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
      statusId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'Statuses',
          key: 'id'
        },
      },
      departureDate: {
        type: Sequelize.DATEONLY
      },
      departureTime: {
        type: Sequelize.TIME
      },
      fromLat: {
        type: Sequelize.DOUBLE
      },
      fromLong: {
        type: Sequelize.DOUBLE
      },
      toLat: {
        type: Sequelize.DOUBLE
      },
      toLong: {
        type: Sequelize.DOUBLE
      },
      seatLeft: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      notes: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('RideSharings');
  }
};