module.exports = (sequelize, DataTypes) => {

    const TimeOffs = sequelize.define('leaveDetails', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        userId: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        designation: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        startDate: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        endDate: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        reason: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        reMarks: {
          type: DataTypes.STRING,
          allowNull: true,
        }
    },{
        tableName:'leaveDetails' ,schema:'leaveManagement', underscored:false, 
        timestamps:true 
    });
    return TimeOffs
}