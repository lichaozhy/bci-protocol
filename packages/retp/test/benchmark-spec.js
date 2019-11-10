'use strict';

const AgentFinder = require('../src/AgentFinder');
const dgram = require('dgram');

describe('RETP::', function () {
	describe('Benchmark::', function () {
	
	});

	describe('AgentFinder::', function () {
		it('debug', function () {
			const agent = dgram.createSocket('udp4');

			agent.on('message', (msg) => {
				console.log(`${msg[1]}.${msg[2]}.${msg[3]}.${msg[4]}:${msg.readInt16BE(5)}`);
			}).bind(8888, '192.168.31.212');
	
			const finder = new AgentFinder();
	
			finder.open({
				TTL: 128,
				bind: {
					port: 8000,
					address: '192.168.31.212'
				},
				broadcast: {
					port: 8888,
					address: '192.168.31.255'
				},
				interval: 1000
			});

			setTimeout(() => {
				finder.close();
				agent.close();
			}, 10000);
		});
	});
});