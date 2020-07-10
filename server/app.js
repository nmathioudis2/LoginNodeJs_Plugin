const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.Promise  = global.Promise;
mongoose.connect('mongodb://localhost/Girokomeio');



const app = express();
app.use(cors());

//Middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());

//Routes
app.use('/users', require('./routes/users'));
app.use('/patient',require('./routes/patient'));
app.use('/rules',require('./routes/rules'));
app.use('/charts',require('./routes/charts'));

//Server set up and initiation
// const port = process.env.PORT || 3000;
// app.listen(port);
// console.log(' Server listening at port ' + port);
module.exports = app;