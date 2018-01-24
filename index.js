var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = process.env.PORT || 5000;
var Task = require('./api/models/todoListModel'); //created model loading here
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://hoanglong96:Tranhoanglong96@ds213688.mlab.com:13688/socialnetwork',
{useMongoClient: true});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index');
});

var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});
console.log('todo list RESTful API server started on: ' + port);

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


