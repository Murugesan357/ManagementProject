const { to , ReS , ReE ,pe} = require('../../global_functions');
const router = require('express').Router();
const DepartmentService = require('../../services/departmentServices/department.Service');

const createDepartment = async function(req,res) {
    if(req&&req.body){
    let[err,data] = await to(DepartmentService.insertDepartment(req.body));
    if(err) return ReE(res,err,422);
    return ReS(res,data,200);
    }else{
      return ReE(res,pe('please send payload'),422);
    }
  };

  const addressUpdation = async function(req,res) {
    if(req&&req.body){
    let[err,data] = await to(DepartmentService.updateBranchAddress(req.body));
    if(err) return ReE(res,err,422);
    return ReS(res,data,200);
    }else{
      return ReE(res,pe('please send payload'),422);
    }
  };

  const destroyDept = async function(req,res) {
    if(req&&req.params&&req.params.id){
    let[err,data] = await to(DepartmentService.removeDepartment(req.params.id));
    if(err) return ReE(res,err,422);
    return ReS(res,data,200);
    }else{
      return ReE(res,pe('please send payload'),422);
    }
  };

  const softDeleteDept = async function(req,res) {
    if(req&&req.params&&req.params.id){
    let[err,data] = await to(DepartmentService.inActivateDept(req.params.id));
    if(err) return ReE(res,err,422);
    return ReS(res,data,200);
    }else{
      return ReE(res,pe('please send payload'),422);
    }
  };

  router.post('/dept',createDepartment);
  router.post('/updateDept',addressUpdation);
  router.post('/removeDept/:id',destroyDept);
  router.post('/inActivateDept/:id',softDeleteDept);
  module.exports = {router, createDepartment , addressUpdation , destroyDept , softDeleteDept};