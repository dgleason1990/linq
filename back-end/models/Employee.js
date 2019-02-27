'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employee = sequelize.define('Employee', {
    id:{
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    img: DataTypes.STRING,
    bio: DataTypes.TEXT,
  },{
    timestamps: false
  });
  Employee.associate = function(models) {
    Employee.belongsTo(models.Company, {
      foreignKey: 'companyId',
      onDelete:'CASCADE'});
    Employee.hasMany(models.Service,{
      foreignKey:'employeeId',
      onDelete:'CASCADE'
    });
  };
  return Employee;
};