'use strict';
module.exports = (sequelize, DataTypes) => {
  const Industry = sequelize.define('Industry', {
    // industryId: DataTypes.INTEGER,
    industry: DataTypes.STRING
  }, {
    underscored: true,
  });
  Industry.associate = function(models) {
    Industry.hasMany(models.Company, {foreignKey: 'industryId'})
  };
  return Industry;
};