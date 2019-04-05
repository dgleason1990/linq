'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkInsert('Users', [{
        username: 'admin',
        password: '$2a$12$ixDa1BImmh7/9DV7ALWsneOUSdNEE6PZifxMnwShxJlHrgDTdX93y',
        userType: 'admin',
      }], {});

  },

  down: (queryInterface, Sequelize) => {
    
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkDelete('Users', null, {});
  }
};
