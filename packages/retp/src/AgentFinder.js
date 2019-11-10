'use strict';

const dgram = require('dgram');
const BINDING_REQUEST_HEAD = 0xFF;

function BroadcastMessage(address, port) {
	return Buffer.from([
		BINDING_REQUEST_HEAD,
		0xC0, 0xA8, 0x01, 0xFF,
		0x22, 0xB8
	]);
}

module.exports = class AgentFinder {
	constructor() {
		this.socket = null;
		this.observer = null;
	}

	open(options) {
		const socket = this.socket = dgram.createSocket('udp4');

		socket.on('listening', () => {
			socket.setBroadcast(true);
			socket.setTTL(options.TTL);
			
			this.observer = setInterval(() => {
				socket.send(BroadcastMessage(), options.broadcast.port, options.broadcast.address);
			}, options.interval);
		}).bind(options.bind.port, options.bind.address);

		return this;
	}

	close() {
		this.socket.close();
		clearInterval(this.observer);
		this.socket = null;
		this.observer = null;
		
		return this;
	}
};