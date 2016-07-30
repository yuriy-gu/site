'use strict';
var fs = require('fs');
var server = require('http').createServer();
var WebSocketServer = require('ws').Server;
var url = require('url');
var ws = new WebSocketServer({ server });
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var COMMENTS_FILE = path.join(__dirname, 'comments.json');

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/scripts', express.static(__dirname + '/node_modules'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Additional middleware which will set headers that we need on each request.
app.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});

app.get('/api/comments', function(req, res) {
  console.log('sending comments');
  fs.readFile(COMMENTS_FILE, function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    res.json(JSON.parse(data));
  });
});


ws.on('connection', (ws) => {
  console.log('someone connected');

  ws.on('message', (message) => {
    fs.readFile(COMMENTS_FILE, function(err, data) {
      let comments = JSON.parse(data);
      comments.push(JSON.parse(message));
      fs.writeFile(COMMENTS_FILE, JSON.stringify(comments), () => {
        ws.send(JSON.stringify(comments));   
      })
    });
  });
});

server.on('request', app);
server.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});