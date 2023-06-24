const { to , ReS , ReE ,pe} = require('../../global_functions');
const router = require('express').Router();
const EmployeeService = require('../../services/employeeServices/employee.Service');

const createEmployee = async function(req,res) {
    if(req&&req.body){
    let[err,data] = await to(EmployeeService.insertEmployee(req.body));
    if(err) return ReE(res,err,422);
    return ReS(res,data,200);
    }else{
      return ReE(res,pe('please send payload'),422);
    }
  };

  const findEmployeeById = async function(req,res) {
    if(req&&req.params&&req.params.id){
    let[err,data] = await to(EmployeeService.selectEmployee(req.params.id));
    if(err) return ReE(res,err,422);
    return ReS(res,data,200);
    }else{
      return ReE(res,pe('please send payload'),422);
    }
  };

  const destroyEmployee = async function(req,res) {
    if(req&&req.params&&req.params.id){
    let[err,data] = await to(EmployeeService.removeEmployee(req.params.id));
    if(err) return ReE(res,err,422);
    return ReS(res,data,200);
    }else{
      return ReE(res,pe('please send payload'),422);
    }
  };

  const softDeleteEmp = async function(req,res) {
    if(req&&req.params&&req.params.id){
    let[err,data] = await to(EmployeeService.inActivateEmployee(req.params.id));
    if(err) return ReE(res,err,422);
    return ReS(res,data,200);
    }else{
      return ReE(res,pe('please send payload'),422);
    }
  };

  router.post('/createEmp',createEmployee);
  router.get('/selectEmp/:id',findEmployeeById);
  router.post('/destroyEmp',destroyEmployee);
  router.post('/inActivateEmp',softDeleteEmp);

  module.exports = {router , createEmployee, findEmployeeById , destroyEmployee , softDeleteEmp}