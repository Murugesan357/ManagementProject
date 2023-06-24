const { to , TE } = require('../../global_functions');
const Manager = require('../../models').manager;
const TeamLead = require('../../models').teamLeads;
const db = require('../../models/index');
const models = require('../../models');
const {Op} = require('sequelize');
// const manager = require('../../models/managerDetails/manager');

const insertManager = async function(body){
    let[err,manager] = await to(Manager.bulkCreate(body.manager));
    if(err) return TE(err);
    else return manager;
}

const fetchDetails = async function(){
    console.log("------");
    let[err,tax] = await to(Manager.findAll({
        where:{
            name:{
                [Op.iLike]:'b%'
            }
        }
    }));
    if(err) return err;
    return tax;
} 

const removeManager = async function(id){
    let[err,removeManager] = await to(Manager.destroy({
        where:{
            id:id
        }
    }));
    if(err) return TE(err);
    else return removeManager;
}

const inActivateManager = async function(id){
    let[err,inActiveManager] = await to(Manager.update({
     isDeleted:true},{
        where:{
            id:id
        }
    }
    ))
    if(err) return TE(err);
    return inActiveManager;
}

const ActivateManager = async function(id){
    console.log(id);
    let[err,ActiveManager] = await to(Manager.update({
     isDeleted:false},{
        where:{
            id:id
        }
    }
    ))
    if(err) return TE(err);
    return ActiveManager;
}
module.exports = { insertManager , fetchDetails , removeManager , inActivateManager , ActivateManager }