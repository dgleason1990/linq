'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Companies', {
    compnay_id: DataTypes.INTEGER,
    businessName: DataTypes.STRING,
    img: DataTypes.STRING,
    address: DataTypes.STRING,
    latitude: DataTypes.INTEGER,
    longitude: DataTypes.INTEGER,
    industry_id: DataTypes.INTEGER
  }, {
    underscored: true,
  });
  Company.associate = function(models) {
    // associations can be defined here
  };
  return User;
};