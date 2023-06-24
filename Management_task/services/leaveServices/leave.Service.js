const { to , ReS , ReE, TE } = require('../../global_functions');
const { Sequelize, Op } = require('sequelize');
const db = require('../../models/index');
const models = require('../../models');
const Leave= require('../../models').timeOffs;
const Employee= require('../../models').employee;
const TeamLead= require('../../models').teamLeads;
const Manager= require('../../models').manager;


const applyLeave= async function(body){

  console.log(body);
    let[err,leaves] = await to(Leave.create(body));
    if(err) return TE(err);
    return leaves;
}

const getLeaveDetails = async function(body){
    let[error,employees] = await to(db.sequelize.query(`SELECT * from "leaveManagement"."leaveDetails" where EXTRACT(MONTH FROM "leaveDetails"."startDate")=? or EXTRACT(MONTH FROM "leaveDetails"."endDate")=? `,{
      replacements:[body,body],
      type:models.sequelize.QueryTypes.SELECT
  }));
    if(error) return TE(error);
    return employees;
}

const leaveDetails = async function(body){
  let department = "";
  let[leaveError, leaveDetails] = await to(Leave.findOne({
    attributes:["designation","userId"],
    where:{
      id:body
    }
  }
  ))
  // console.log(leaveDetails);
  // console.log("----",leaveDetails.userId);
  if(leaveError) return TE(leaveError)
  else{
  if(leaveDetails.designation == "employee" ){
     department = Employee;
  }
  else if(leaveDetails.designation == "teamLeads"){
    department = TeamLead;
  }
  else{
    department = Manager;
  }
  }
  let[employeError,employeeDetails] = await to(department.findOne({
      where:{
        id:leaveDetails.userId
      }
  }));
  console.log(employeeDetails);
  if(employeError) return TE(employeError)
  if(employeeDetails) return employeeDetails;
  
}
module.exports = { applyLeave , getLeaveDetails , leaveDetails }
