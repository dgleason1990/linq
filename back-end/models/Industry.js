'use strict';
module.exports = (sequelize, DataTypes) => {
  const Industry = sequelize.define('Industry', {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    industry: DataTypes.STRING
  });
  Industry.associate = function(models) {
    Industry.hasMany(models.Company, {
      foreignKey: 'industryId', 
      onDelete: 'CASCADE'
    })
  };
  return Industry;
};