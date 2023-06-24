const { to , ReS , ReE } = require('../../global_functions');
const Employee = require('../../models').employee;

const insertEmployee = async function(body){
    let[err,employee] = await to(Employee.bulkCreate(body));
    if(err) return TE(err);
    else return employee;
}

const selectEmployee = async function(id){
    let[err,employee] = await to(Employee.findOne({
        where:{
            id: id
        }
    }));
    if(err) return TE(err);
    else return employee;
}

const removeEmployee = async function(id){
    let[err,removeEmp] = await to(Employee.destroy({
        where:{
            id: id
        }
    }));
    if(err) return TE(err);
    else return removeEmp;
}

const inActivateEmployee = async function(id){
    let[err,inActiveEmp] = await to(Employee.update({
        set:{isDeleted:true},
        where:{
            id: id
        }
    }))
    if(err) return TE(err);
    else return inActiveEmp;
}

module.exports = { insertEmployee , selectEmployee , removeEmployee , inActivateEmployee }