module.exports = (db,Sequelize)=>{
    const TeamLeads = db.define('teamLeads', {
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
        // manager_id: {
        //   type:Sequelize.INTEGER,
        //   allowNull: false,
        // },
        // department_id:{
        //   type:Sequelize.INTEGER,
        //   allowNull: false,
        // },
        isManager: {
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        },
        isDeleted:{
          type: Sequelize.BOOLEAN,
          allowNull: false,
          defaultValue: false,
        }
        },
        {
            tableName:'teamLeads' ,schema:'teamLeadsDetails', underscored:false, timestamps:true
        });
        TeamLeads.association = (models) => {
          TeamLeads.hasMany(models.employee, { foreignKey: 'TL_id' });
          TeamLeads.belongsTo(models.manager, { foreignKey: 'manager_id' });
          TeamLeads.belongsTo(models.department,{ foreignKey: 'department_id'});
        }
        return TeamLeads;
    }
      
    
    
      
      
      
      
      
      
      