const { to,TE} = require('../../global_functions');
const TeamLead = require('../../models').teamLeads;

const insertTl = async function(body){
    let[err,tl] = await to(TeamLead.create(body));
    if(err) return TE(err);
    else return tl;
}

const removeTl = async function(id){
    let[err,removeTl] = await to(TeamLead.destroy({
        where:{
            id:id
        }
    }));
    if(err) return TE(err);
    else return removeTl;
}

const inActivateTl = async function(id){
    let[err,inActiveTl] = await to(TeamLead.update({
        isDeleted:true},
        {where:{
            id:id
        }
    }))
    if(err) return TE(err);
    else return inActiveTl;
}
const ActivateTl = async function(id){
    let[err,ActiveTl] = await to(TeamLead.update({
        isDeleted:false},{
        where:{
            id:id
        }
    }))
    if(err) return TE(err);
    return ActiveTl;
}


module.exports = { insertTl ,removeTl ,inActivateTl,ActivateTl}
