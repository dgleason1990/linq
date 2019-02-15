'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Companies', {
    companyId: DataTypes.INTEGER,
    businessName: DataTypes.STRING,
    img: DataTypes.STRING,
    address: DataTypes.STRING,
    summary: DataTypes.TEXT,
    point: DataTypes.GEOMETRY('POINT'),
    industryId: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  Company.associate = function(models) {
    Company.belongsTo(models.Industries,{foreignKey: industryId});
    Company.hasMany(models.Employees);
  };
  return Company;
};