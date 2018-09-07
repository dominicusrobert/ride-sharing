'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Statuses', 
    [
      {
        statusCategoryId: 1,
        name: 'Open for share riding',
        description: 'Open for share riding',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        statusCategoryId: 1,
        name: 'Waiting Departure Time',
        description: 'Close Share riding',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        statusCategoryId: 1,
        name: 'On the way',
        description: 'On the way to pick up passanger',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        statusCategoryId: 1,
        name: 'Picked up passanger',
        description: 'Has pick up passanger',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        statusCategoryId: 1,
        name: 'Finish Deliver passanger',
        description: 'Has delivered passanger',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        statusCategoryId: 2,
        name: 'Waiting for approval',
        description: 'Waiting for approval from riders',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        statusCategoryId: 2,
        name: 'Waiting for departure time',
        description: 'Has been approved by riders',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        statusCategoryId: 2,
        name: 'Arrived to pick up location',
        description: 'Waiting riders to pick up (this is only status that passanger can update)',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
      {
        statusCategoryId: 2,
        name: 'Rejected',
        description: 'Riders reject your request',
        createdAt : new Date(),
        updatedAt : new Date(),
      },
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
