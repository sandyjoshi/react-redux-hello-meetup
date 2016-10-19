var express = require('express');
var path = require('path');
var webpack = require('webpack');
var app = express();
var bodyParser = require('body-parser');

var isDevelopment = (process.env.NODE_ENV !== 'production');
var static_path = path.join(__dirname, 'public');

var message = "ReactJS";

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static(static_path))
  .get('/', function (req, res) {
    res.sendFile('index.html', {
      root: static_path
    });
  }).get('/api/message', function (req, res) {
    res.setHeader("Content-Type", "text/json");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send({ message : message });
  }).post('/api/message', function (req, res) {
    message = req.body.message;
    res.send({ message : message });
  }).listen(process.env.PORT || 9090, function (err) {
    if (err) { console.log(err) };
    console.log('Listening at localhost:9090');
  });


if (isDevelopment) {
  var config = require('./webpack.config');
  var WebpackDevServer = require('webpack-dev-server');

  new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true
  }).listen(3000, 'localhost', function (err, result) {
    if (err) { console.log(err) }
    console.log('Listening at localhost:3000');
  });
}
