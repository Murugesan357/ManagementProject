const { to , ReS , ReE ,pe} = require('../../global_functions');
const router = require('express').Router();
const ManagerService = require('../../services/managerServices/manager.Service');

const createManager = async function(req,res) {
    if(req&&req.body){
    let[err,data] = await to(ManagerService.insertManager(req.body));
    if(err) return ReE(res,err,422);
    return ReS(res,data,200);
    }else{
      return ReE(res,pe('please send payload'),422);
    }
  };

  const fetchManager = async function(req,res) {
    let[err,data] = await to(ManagerService.fetchDetails());
    if(err) return ReE(res,err,422);
    return ReS(res,data,200);

  }

  const destroyManager = async function(req,res) {
    if(req&&req.params&&req.params.id){
    let[err,data] = await to(ManagerService.removeManager(req.params.id));
    if(err) return ReE(res,err,422);
    return ReS(res,data,200);
    }else{
      return ReE(res,pe('please send payload'),422);
    }
  };

  const softDeleteManager = async function(req,res) {
    if(req&&req.params&&req.params.id){
    let[err,data] = await to(ManagerService.inActivateManager(req.params.id));
    if(err) return ReE(res,err,422);
    return ReS(res,data,200);
    }else{
      return ReE(res,pe('please send payload'),422);
    }
  };

  const activateManager = async function(req,res) {
    if(req&&req.params&&req.params.id){
      console.log("---------");
    let[err,data] = await to(ManagerService.ActivateManager(req.params.id));
    if(err) return ReE(res,err,422);
    return ReS(res,data,200);
    }else{
      return ReE(res,pe('please send payload'),422);
    }
  };

  router.post('/createManager',createManager);
  router.get('/fetchManager',fetchManager);
  router.post('/destroyManager/:id',destroyManager);
  router.get('/inActivateManager/:id',softDeleteManager);
  router.get('/activateManager/:id',activateManager);

  module.exports = {router , createManager , fetchManager , destroyManager , softDeleteManager}