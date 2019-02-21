'use strict';
module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
    // serviceId: DataTypes.INTEGER,
    service: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    time: DataTypes.INTEGER,
    // employeeId: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  Service.associate = function(models) {
    Service.belongsTo(models.Employee, {foreignKey: 'employeeId'})
  };
  return Service;
};