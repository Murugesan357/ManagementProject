const express = require('express');
const database = require("../database.js")
const bodyParser = require('body-parser');
const router = express.Router();
const { check, validationResult }= require('express-validator');

//body parser
router.use(bodyParser.urlencoded( {extended : true} ));
router.use(bodyParser.json());


router.get("/",(req,res)=>{
    res.render("home", {name:"express home"});
});
  
router.get("/about",(req,res)=>{
      res.render("about", {name:"express about"});
});
  
router.get("/manager",(req,res)=>{
      database.selectManager()
      .then((results)=>{
        console.log(results);
        res.render('customerDetails', {results});
      });
});
  
router.get("/tl",(req,res)=>{
  database.selectTl()
  .then((results)=>{
    console.log(results);
    res.render('tlDetails', {results});
  });
});

router.post('/createCustomer',function(req,res){
    database.createCustomer(req.body)
    .then(()=> {
      res.write('Success');
    })
    .catch(error => {
      console.log(error);
    })
});

router.put('/updateCustomer',function(req,res){
    //console.log("pass");
    database.updateCustomer(req.body)
    .then(()=> {
      res.write('Success');
    });
});

router.get('/update',(req,res) => {
  res.render('updateCustomer', {name:'express update'});
});      
  
router.get('/login',(req,res)=>{
  res.render('customer_signIn', {name:'express form'});
});

// router.get('/customerSearch/:id',(req,res)=>{
//   const id=req.params.id;
//   //console.log(id);
//   database.fetchCustomer(id)
//     .then(datas => {
//       let result=datas[0];
//       res.render('customerSearch',{result});
//       res.end();
//     })
//     .catch(error => {
//         console.log(error);
//     })
    //const result=datas[0];
// });

router.get('/customerSearch/:id',(req,res)=>{
  const id=req.params.id;
  database.fetchCustomer(id)
    .then(datas => {
      res.send(datas[0]);
    })
    .catch(error => {
        console.log(error);
    })
   
});

router.get('/check',(req,res)=>{
  res.render('validation', {name:'express form'});
});

router.post('/validate',[
  check('email', 'Email length should be 10 to 30 characters')
                    .isEmail().isLength({ min: 10, max: 30 }),
  check('name', 'Name length should be 10 to 20 characters')
                    .isLength({ min: 10, max: 20 }),
  check('mobile', 'Mobile number should contains 10 digits')
                    .isLength({ min: 10, max: 10 }),
  check('password', 'Password length should be 8 to 10 characters')
                    .isLength({ min: 8, max: 10 })


 ],(req,res)=>{
  const errors = validationResult(req);
 
  if (!errors.isEmpty()) {
    res.json(errors)
  }
  else {
  res.send("Successfully validated")
  } 


});

module.exports=router;
  