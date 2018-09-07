'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Vehicles',
      [
        {
          userId: 1,
          vehicleTypeId: 2,
          brand: 'Toyota Avanza',
          licensePlate: 'B 1234 AJ',
          color: 'white',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          userId: 2,
          vehicleTypeId: 2,
          brand: 'Toyota Avanza',
          licensePlate: 'B 3211 AJ',
          color: 'blue',
          createdAt: new Date(),
          updatedAt: new Date(),
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
