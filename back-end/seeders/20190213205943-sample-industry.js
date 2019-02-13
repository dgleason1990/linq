'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Industries', [
      {industry: 'Eyebrows'},
      {industry: 'Massage Therapist'},
      {industry: 'Wax'},
      {industry: 'Eyelashes'},
      {industry: 'Hair'},
      {industry: 'Facials'},
      {industry: 'Makeup'}
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Industries');
  }
};