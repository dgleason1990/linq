'use strict';
module.exports = (sequelize, DataTypes) => {
  const Industry = sequelize.define('Industries', {
    industry_id: DataTypes.INTEGER,
    industry: DataTypes.STRING
  }, {
    underscored: true,
  });
  Industry.associate = function(models) {
    // associations can be defined here
  };
  return User;
};