'use strict';
module.exports = (sequelize, DataTypes) => {
  const Companies = sequelize.define('Companies', {
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
  Companies.associate = function(models) {
    Companies.belongsTo(models.Industries, {foreignKey: 'industriesId'});
    Companies.hasMany(models.Employees);
  };
  return Companies;
};