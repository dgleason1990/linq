'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employees = sequelize.define('Employees', {
    employeeId: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    img: DataTypes.STRING,
    bio: DataTypes.TEXT,
    companyId: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  Employees.associate = function(models) {
    Employees.belongsTo(models.Companies, {foreignKey: 'companyId'});
    Employees.hasMany(models.Services);
  };
  return Employees;
};