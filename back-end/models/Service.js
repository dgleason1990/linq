'use strict';
module.exports = (sequelize, DataTypes) => {
  const Service = sequelize.define('Service', {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    service: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    time: DataTypes.INTEGER,
  },{
    timstamp: false,
    underscored: true,
  });
  Service.associate = function(models) {
    Service.belongsTo(models.Employee, {
      foreignKey: 'employeeId',
      onDelete: 'CASCADE'
    })
  };
  return Service;
};