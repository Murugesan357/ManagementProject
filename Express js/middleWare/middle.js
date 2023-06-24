//creating middleware
const middleWare=(req,res,next)=>{
    console.log("hi this is middle ware");
    console.log("Request URL:",req.url);
    console.log("Request METHOD:",req.method);
    console.log("-------------------------------");
    next();
}
module.exports.middleWare=middleWare;