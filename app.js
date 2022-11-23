var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var database = require("./config/database");


var usuariosRouter = require('./routes/usuarios.router');
//var auth = require("./auth/main_auth")

var articulosRouter = require('./routes/articulos.router');

const cors = require('cors');

var app = express();

const corsOptions = {
  origin: 'https://animalarium-back-production.up.railway.app/',
	//origin: 'https://animalarium-front.vercel.app/',
	optionsSuccessStatus: 200
};
app.use(cors(corsOptions));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Mongo Connection
database.mongoConnect();

app.use('/usuarios', usuariosRouter);
//app.use(auth);


//Router
app.use('/articulos', articulosRouter);

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
