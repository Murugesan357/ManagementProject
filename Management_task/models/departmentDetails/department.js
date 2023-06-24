module.exports = (sequelize, DataTypes) => {
    const Department= sequelize.define('department', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      address: {
        type: DataTypes.JSON,
        allowNull: false
      },
      isDeleted:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        default: false
      }
      
      
    },  {
      tableName: 'department', 
      schema: "departmentDetails",
      timestamps: true,
      paranoid: false,
      underscored: false
    });
    Department.association = (models) => {
      Department.hasMany(models.manager, { foreignKey: 'department_id' });
      Department.hasMany(models.teamLeads, { foreignKey: 'department_id' });
    };
    return Department;
}