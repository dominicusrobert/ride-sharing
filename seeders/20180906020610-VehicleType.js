'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('VehicleTypes', 
    [
      {
        name: 'Motor',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        name: 'Mobil',
        createdAt : new Date(),
        updatedAt : new Date(),
      }
    ], {});

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
