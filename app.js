const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const questionRouter = require('./routes/questionRouter');
const introRouter = require('./routes/introRouter');
const careRouter = require('./routes/careRouter');

const app = express();

app.use(cors());

app.use(express.json());

// dev logging
app.use(morgan('dev'));

// routes
app.use('/api/v1/questions', questionRouter);
app.use('/api/v1/introquestions', introRouter);
app.use('/api/v1/response', careRouter);

app.use(express.static(__dirname + '/public'));

//handle spa
app.get(/.*/,(req,res)=> res.sendFile(__dirname + 'public/index.html'));

module.exports = app