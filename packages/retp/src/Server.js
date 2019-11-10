'use strict';

const net = require('net');
const AgentFinder = require('./AgentFinder');

const SYMBOL = {
	STATE: Symbol('ETP.SERVER.STATE'),
	AGENT_FINDER: Symbol('ETP.SERVER.AGENT_FINDER')
};

const COMMAND = {
	DATA_ARRIVED: 0,
	BINDING_REQUESTED: 0,
	AGENT_SETTINGS_ARRIVED: 0,
	AGENT_SETTINGS_UPDATED: 0,
};

exports.Server = class Server extends net.Server {
	constructor(options) {
		const state = {
			finder: {
				active: false
			},
			server: {
				running: false,

			},
			service: {
				count: 0,
				ready: false,
				working: false,
				agentList: []
			}
		};
		
		super(socket => {
			socket.on('data', data => {

			}).on('error', () => {

			});
		});

		this[SYMBOL.STATE] = state;
		this[SYMBOL.AGENT_FINDER] = new AgentFinder();
	}

	get state() {
		return {};
	}
	

};