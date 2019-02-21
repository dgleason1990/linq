'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    // employeeId: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    img: DataTypes.STRING,
    bio: DataTypes.TEXT,
    // companyId: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  Employee.associate = function(models) {
    Employee.belongsTo(models.Company, {foreignKey: 'companyId'});
    Employee.hasMany(models.Service);
  };
  return Employee;
};