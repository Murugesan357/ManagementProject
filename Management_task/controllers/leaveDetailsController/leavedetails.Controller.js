const { to , ReS , ReE ,pe} = require('../../global_functions');
const router = require('express').Router();
const LeaveService = require('../../services/leaveServices/leave.Service');

const applyLeave = async function(req,res) {
    if(req&&req.body){
    let[err,data] = await to(LeaveService.applyLeave(req.body));
    if(err) return ReE(res,err,422);
    return ReS(res,data,200);
    }else{
      return ReE(res,pe('please send payload'),422);
    }
};

const whoIsOut = async function(req,res) {
  if(req&&req.params&&req.params.month){
    let[err,data] = await to(LeaveService.getLeaveDetails(req.params.month));
    if(err) return ReE(res,err,422);
    return ReS(res,data,200);
  }else{
    return ReE(res,pe('please send month in params '),422);
  }
}; 

const fetchOutdetails= async function(req,res) {
  if(req&&req.params&&req.params.id){
    let[err,data] = await to(LeaveService.leaveDetails(req.params.id));
    if(err) return ReE(res,err,422);
    return ReS(res,data,200);
  }else{
    return ReE(res,pe('please send id in params '),422);
  }
}; 
router.post('/applyLeave',applyLeave);
router.get('/whoIsOut/:month',whoIsOut);
router.get('/OutDetails/:id',fetchOutdetails);

  module.exports = {router , applyLeave , whoIsOut ,fetchOutdetails}