'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.bulkInsert('Users',
      [
        {
          username: 'Dominicus',
          email: 'dominicus@gmail.com',
          password: '$2b$10$.z.JyyZjTDqnhqH0RKozr.yGnWrXfdFjxcHwHs2SBsqpzivoO1t2e',
          phoneNumber: '0817126838',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Robert',
          email: 'robert@gmail.com',
          password: '$2b$10$.z.JyyZjTDqnhqH0RKozr.yGnWrXfdFjxcHwHs2SBsqpzivoO1t2e',
          phoneNumber: '08171233338',
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
