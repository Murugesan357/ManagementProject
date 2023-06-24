const { Client } = require('pg');

const client = new Client({
    host:'localhost',
    user:'postgres',
    password:'9677603469',
    database:'murugesan',
    port: 5432,
});
client.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

//select all data from customer table
const selectManager = function(){
    let p=new Promise((resolve, reject) => {
        client.query(`select * from "managerDetails".managers order by managers.id`, function(err,result){
            if(result) {
                resolve(result.rows);
            }
            else{
                reject(err);
            }
        });
    });
   return p;
}

const selectTl = function(){
    let p=new Promise((resolve, reject) => {
        client.query(`SELECT * FROM "teamLeadsDetails"."teamLeads" ORDER BY id `, function(err,result){
            if(result) {
                resolve(result.rows);
            }
            else{
                reject(err);
            }
        });
    });
   return p;
}


//customer insert
const createCustomer = function(customer){
    //console.log('first name',customer);
    const p= new Promise((resolve,reject)=>{
        const sql = "insert into Customers(firstName, lastName) values ?";
        const values = [[customer.firstName, customer.lastName] ];
        // console.log(values);
        con.query(sql, [values], function (err, result) {
            if(err){
                reject(err);
            }
            else{
                 resolve(result);
            }
        });
    });
    return p;
}
module.exports.createCustomer=createCustomer; 

//updating customer table value
const updateCustomer = function(data){
    // console.log(data.i);
    const p = new Promise((resolve,reject)=>{
        const sql = "update Customers set firstName=? ,lastName=? where id=?";
        const values = [data.firstName , data.lastName , data.id] ;
        con.query(sql , values , function(err, result) {
            if(err){
                 reject(err);
            }
            else{
                 resolve(result);
            }
        });
    });
    return p;
}
module.exports.updateCustomer=updateCustomer; 

// fetch customer details using id
const fetchCustomer = function(customer){
    //console.log("pass")
    const customerDetails= new Promise((resolve,reject)=>{
        const sql = "select firstName, lastName from Customers where id=?";
        //console.log(customer)
        const values = [customer] ;
        con.query(sql , values , function(err, result) {
            if(err){
                 reject(err);
            }
            else{
                 resolve(result);
            }
        });
    });
    return customerDetails;
}
module.exports={selectManager,fetchCustomer , selectTl};
  