const { to , ReS , ReE ,TE } = require('../../global_functions');
const Department = require('../../models').department;

const insertDepartment = async function(body){
    let[err,department] = await to(Department.findOne({
      where:{
        name:body.name
      }
    }));
    if(err) return TE(err);
    if(!department){
      let[error,dept] = await to(Department.create({
        name:body.name,
        address:body.address
      }));
      if(error) return TE(error);
      return dept;
    }
    else{
      return TE("department already registered : dublicate entry of department");
    }
}

const updateBranchAddress = async function(body) {
    let[err,data] = await to(Department.update({
      set:[
        body.address
      ],
      where:{
        id : body.branchId
      }
    }));
    if(err) TE(err.message);
    return data;
  }

  const removeDepartment = async function(id){
    let[err,removeDept] = await to(Department.destroy({
        where:{
            id:id
        }
    }));
    if(err) return TE(err);
    else return removeDept;
}

const inActivateDept = async function(id){
  let[err,inActiveDept] = await to(Department.update({
      set:{isDeleted:true},
      where:{
          id:id
      }
  }))
  if(err) return TE(err);
  else return inActiveDept;
}

module.exports = { insertDepartment , updateBranchAddress , removeDepartment , inActivateDept }