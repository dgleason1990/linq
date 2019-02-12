'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Companies', {
      company_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      businessName: {
        type: Sequelize.STRING
      },
      img:{
        type: Sequelize.STRING
      },
      address:{
        type: Sequelize.STRING
      },
      latitude: {
        type: Sequelize.INTEGER
      },
      longitude:{
        type: Sequelize.INTEGER
      }, 
      industry_id: {
        type: Sequelize.INTEGER,
        foreignKey: 'industry_id',
        allowNull: false,
        references: {model: 'Industries', key: 'industry_id'}
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('companies');
  }
};