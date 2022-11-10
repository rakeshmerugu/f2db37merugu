var createError = require('http-errors');
var express = require('express');
var path = require('path');
var mongoose = require('mongoose')
var mongodb = require('mongodb')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Gel = require("./models/Gel");


require('dotenv').config();
const connectionString =
  process.env.MONGO_CON
mongoose = require('mongoose');
mongoose.connect(connectionString,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
  var db = mongoose.connection;
  //Bind connection to error event
  db.on('error', console.error.bind(console, 'MongoDB connectionerror:'));
  db.once("open", function () {
    console.log("Connection to DB succeeded")
  });


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var appRouter = require('./routes/Gel');
var gridRouter = require('./routes/gridbuild');
var selRouter = require('./routes/selector');
var resourceRouter = require('./routes/resource');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/Gel', appRouter);
app.use('/gridbuild', gridRouter);
app.use('/selector', selRouter);
app.use('/resource', resourceRouter);


// We can seed the collection if needed on server start
async function recreateDB(){
  // Delete everything
  await Gel.deleteMany();
  let instance1 = new
  Gel({Gel_Name:"Custom Styling", Gel_Company:'Prose',Gel_Size:9.0,Gel_Rating:4.7});
  instance1.save( function(err,doc) {
  if(err) return console.error(err);
  console.log("First Gel details saved")
  });
  let instance2 = new
  Gel({Gel_Name:"Crystal Ice", Gel_Company:'Sally',Gel_Size:10.0,Gel_Rating:4.2});
   instance2.save( function(err,doc) {
   if(err) return console.error(err);
   console.log("Second Gel details saved")
   });
   let instance3 = new
   Gel({Gel_Name:"Small Round", Gel_Company:'QLP',Gel_Size:11.0,Gel_Rating:4.6});
    instance3.save( function(err,doc) {
    if(err) return console.error(err);
    console.log("Third Gel details saved")
    });
 }
 
 let reseed = true;
 if (reseed) { recreateDB();}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
