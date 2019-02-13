'use strict';
module.exports = (sequelize, DataTypes) => {
  const Industry = sequelize.define('Industries', {
    industryId: DataTypes.INTEGER,
    industry: DataTypes.STRING
  }, {
    underscored: true,
  });
  Industry.associate = function(models) {
    Industry.hasMany(models.Companies)
  };
  return Industry;
};