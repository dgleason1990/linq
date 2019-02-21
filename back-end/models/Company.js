'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    // companyId: DataTypes.INTEGER,
    businessName: DataTypes.STRING,
    img: DataTypes.STRING,
    address: DataTypes.STRING,
    summary: DataTypes.TEXT,
    point: DataTypes.GEOMETRY('POINT'),
    // industryId: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  Company.associate = function(models) {
    Company.belongsTo(models.Industry, {foreignKey: 'industryId'});
    Company.hasMany(models.Employees, {foreignKey: 'companyId'});
  };
  return Company;
};