var express       = require('express');
var path          = require('path');
var favicon       = require('serve-favicon');
var logger        = require('morgan');
var cookieParser  = require('cookie-parser');
var bodyParser    = require('body-parser');
var mongoose      = require('mongoose'); // Working with MongoDB

// Routes
var appRoutes     = require('./routes/app');
var messageRoutes = require('./routes/messages');
var userRoutes    = require('./routes/user');

var app       = express();
mongoose.connect('localhost/node-angular'); 


/*=================================
  View engine setup
===================================*/
// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


/*==================================
    Access from different server
====================================*/
// If Angular is run on different server than backend
// It's not allowed by default - Ako hocemo da pristupimo, moramo uneti kod ispod (dozvoljavamo putem middleware-a pristup sa bilo koje lokacije)
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Dozvoljavamo pristup na ovaj server bilo kom drugom domenu
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With', 'Accept'); // Heder koji je dozvoljen (može i bez ovog)
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS'); // Dozvoljene metode
    next(); // Nastavi sa izvršavanjem kako bi request dosao do rute
});

// Target Routes
app.use('/messages', messageRoutes);
//app.use('/user', userRoutes);
app.use('/', appRoutes);


/*=================================
    Catch 404 and forward to 
    error handler
===================================*/
app.use(function(req, res, next) {
  res.render('index');
});





module.exports = app;