'use strict';

const Server = require('./src/Server');

exports.createServer = function createServer() {
	return new Server();
};
