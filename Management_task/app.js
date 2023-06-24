var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
models = require('./models');



app = express();
require('./config/config');
require('./global_functions');
require('./swagger')
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//routes
app.use('/department',require('./controllers/departmentController/department.Controller').router);
app.use('/employee',require('./controllers/employeeController/employee.Controller').router);
app.use('/manager',require('./controllers/managerController/manager.Controller').router);
app.use('/tl',require('./controllers/teamLeadsController/teamLeads.Controller').router);
app.use('/timeoff',require('./controllers/leaveDetailsController/leavedetails.Controller').router);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

models.sequelize
    .authenticate()
    .then(() => {
      console.log("Connected to SQL database:", CONFIG.db_name);
      const schema = models.schemaCreate.then(() => {
        models.sequelize.sync({alter:true})
      });
    })
    .catch((err) => {
      console.error(
        "Unable to connect to Postgres database:",
        CONFIG.db_name,
        err.message
      );
    });

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
