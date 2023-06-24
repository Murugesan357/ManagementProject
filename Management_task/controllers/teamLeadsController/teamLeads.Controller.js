const { to , ReS , ReE ,pe} = require('../../global_functions');
const router = require('express').Router();
const TlService = require('../../services/teamleadServices/teamLeads.Service');

const createTl= async function(req,res) {
    if(req&&req.body){
    let[err,data] = await to(TlService.insertTl(req.body));
    if(err) return ReE(res,err,422);
    return ReS(res,data,200);
    }else{
      return ReE(res,pe('please send payload'),422);
    }
  };
  const destroyTl = async function(req,res) {
    if(req&&req.params&&req.params.id){
    let[err,data] = await to(TlService.removeTl(req.params.id));
    if(err) return ReE(res,err,422);
    return ReS(res,data,200);
    }else{
      return ReE(res,pe('please send payload'),422);
    }
  };

  const softDeleteTl = async function(req,res) {
    if(req&&req.params&&req.params.id){
    let[err,data] = await to(TlService.inActivateTl(req.params.id));
    if(err) return ReE(res,err,422);
    return ReS(res,data,200);
    }else{
      return ReE(res,pe('please send payload'),422);
    }
  };
  const activateTl = async function(req,res) {
    if(req&&req.params&&req.params.id){
    let[err,data] = await to(TlService.ActivateTl(req.params.id));
    if(err) return ReE(res,err,422);
    return ReS(res,data,200);
    }else{
      return ReE(res,pe('please send payload'),422);
    }
  };


 router.post('/createTl',createTl);
 router.get('/destroyTl/:id',destroyTl);
 router.get('/inActivateTl/:id',softDeleteTl);
 router.get('/activateTl/:id',activateTl);

  module.exports = {router, createTl ,destroyTl , softDeleteTl,activateTl}