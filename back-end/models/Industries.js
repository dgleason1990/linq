'use strict';
module.exports = (sequelize, DataTypes) => {
  const Industries = sequelize.define('Industries', {
    industryId: DataTypes.INTEGER,
    industry: DataTypes.STRING
  }, {
    underscored: true,
  });
  Industries.associate = function(models) {
    Industries.hasMany(models.Companies,{foreignKey: 'industryId'})
  };
  return Industries;
};