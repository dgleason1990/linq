'use strict';
module.exports = (sequelize, DataTypes) => {
  const Services = sequelize.define('Services', {
    serviceId: DataTypes.INTEGER,
    service: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    time: DataTypes.INTEGER,
    employeeId: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  Services.associate = function(models) {
    Services.belongsTo(models.Employees, {foreignKey: 'employeeId'})
  };
  return Services;
};