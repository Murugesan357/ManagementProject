module.exports = (db,Sequelize)=>{
const Employee = db.define('employee', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    address: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    contactNumber: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    // TL_id: {
    //   type:Sequelize.INTEGER,
    //   allowNull: false,
    // },
    isIntern: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    isDeleted:{
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    }
    },
    {
        tableName:'employee' ,schema:'employeeDetails', underscored:false, timestamps:true
    });

    Employee.association = (models) => {
      Employee.belongsTo(models.teamLeads, { foreignKey: 'TL_id' });
  };
    return Employee;
}
  


  
  
  
  
  
  
  