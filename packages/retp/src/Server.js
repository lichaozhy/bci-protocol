'use strict';

const net = require('net');

exports.Server = class Server extends net.Server {
	constructor() {
		super();
	}
};