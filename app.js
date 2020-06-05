const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.Promise  = global.Promise;
mongoose.connect('mongodb://localhost/LoginModule');


const app = express();

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

//Routes
app.use('/users', require('./routes/users'));

//Server set up and initiation
const port = process.env.PORT || 3000;
app.listen(port);
console.log(' Server listening at port ' + port);
// module.exports = app;
