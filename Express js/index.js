const express = require('express');
const routes = require("./routes/page")
const MiddleWareFunction = require("./middleWare/middle")
const app = express();
// set view engine
app.set('view engine','ejs');

app.use(MiddleWareFunction.middleWare);

app.use("", routes);

// server listen
app.listen(2000,()=>{
    console.log("server listen started...");
});


