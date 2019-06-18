// express module
var express = require('express');
// initialize app for express
var app = express();
// flash module
var flash = require('express-flash');

// initialize flash
app.use(flash());
// session module
var session = require('express-session');
// initialize session
app.use(session({
    secret: 'allwayswonders',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000
    }
}));
// body-parser module
var bodyParser = require('body-parser');
// initialize body-parser module
app.use(bodyParser.json());
// mongoose module
var mongoose = require('mongoose');

// link to static angular files
app.use(express.static(__dirname + '/public/dist/public'))

// //mongoose
// require('./server/config/mongoose');
//routes
// require('./server/config/routes')(app)

// set server to port 8000
app.listen(8000, function () {
    console.log('Listening on port 8000');
})