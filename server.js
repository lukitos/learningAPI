var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var cors = require('cors');
var logger = require('morgan');
var knex = require('./db/knex');

var index = require('./routes/indexRoutes');
var tags = require('./routes/tagRoutes');
var person = require('./routes/personRoutes');
var asset = require('./routes/assetRoutes');
var learning = require('./routes/learningRoutes');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', index);
app.use('/api/tags', tags);
app.use('/api/person', person);
app.use('/api/assets', asset);
app.use('/api/learning', learning);

app.listen(port, function() {
  console.log("listening on port: ", port);
})
