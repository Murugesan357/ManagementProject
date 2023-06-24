module.exports = (db,Sequelize)=>{
    const Manager = db.define('managers', {
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
        contactNumber: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        // department_id:{
        //   type:Sequelize.INTEGER,
        //   allowNull: false,
        // },
        isDeleted:{
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        }
        },
        {
            tableName:'managers' ,schema:'managerDetails', underscored:false, timestamps:true
        });
        Manager.association = (models) => {
          Manager.hasMany(models.teamLeads, { foreignKey: 'manager_id' });
          Manager.belongsTo(models.department, { foreignKey: 'department_id' });
        }
        return Manager;
    }
      
    
    
      
      
      
      
      
      
      