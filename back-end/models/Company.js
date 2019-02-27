'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    businessName: DataTypes.STRING,
    img: DataTypes.STRING,
    address: DataTypes.STRING,
    summary: DataTypes.TEXT,
    point: DataTypes.GEOMETRY('POINT'),
  },{
    timestamps: false
  });
  Company.associate = function(models) {
    Company.belongsTo(models.Industry, {
      foreignKey: 'industryId', 
      onDelete: 'CASCADE'
    });
    Company.hasMany(models.Employee, {
      foreignKey: 'companyId',
      onDelete:'CASCADE'
    });
  };
  return Company;
};