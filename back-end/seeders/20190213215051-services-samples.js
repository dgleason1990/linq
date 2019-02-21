'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Services', [{
        service: 'Microblading',
        description: 'We will microblade your eyebrows',
        price: 45.00,
        time: 25,
        employeeId: 1
      },{
        service: 'Waxing',
        description: 'Wax your eyebrows with organic wax',
        price: 89.99,
        time: 60,
        employeeId: 1
      },{
        service: 'Cutting',
        price: 10,
        time: 20,
        employeeId: 1
      }], {});

  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Services', null, {});
  }
};
