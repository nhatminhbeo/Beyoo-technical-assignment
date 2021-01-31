const http = require('http');
const bodyParser = require('body-parser');
const express = require('express');
const logger = require('morgan');

var app = express();
var httpServer = http.createServer(app);
var port = process.env.PORT || 3000;

// Configs
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.disable('x-powered-by');

// CORS
app.use(function (req, res, next) {
	res.append('Access-Control-Allow-Origin', req.headers.origin || '*');
	res.append('Access-Control-Allow-Credentials', 'true');
	res.append('Access-Control-Allow-Methods', ['GET', 'OPTIONS', 'PUT', 'POST', 'DELETE']);
	res.append('Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept');
	next();
});
app.enable('trust proxy');

httpServer.listen(port, function () {
	console.log('Server running on port ' + port);
});

var router = {};
router.User = require('./route/user');
router.User.route(app);
