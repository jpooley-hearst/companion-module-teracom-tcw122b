exports.getConfigFields = function () {
	return [
		{
			type: 'textinput',
			id: 'host',
			label: 'Target IP',
			width: 5,
			// regex: self.REGEX_IP
		},
		{
			type: 'textinput',
			id: 'httpPort',
			label: 'HTTP Port (Default: 80)',
			width: 4,
			default: 80,
			regex: this.REGEX_PORT
		},
		{
			type: 'text',
			id: 'info',
			width: 12,
			label: 'Information',
			value: 'Please fill out Username and Password, if you have set XML/HTTP API authentication to enabled on your device. Otherwise please leave it empty (default is OFF)'
		},
		{
			type: 'textinput',
			id: 'username',
			label: 'Username (Default: admin)',
			width: 6,
			default: ''
		},
		{
			type: 'textinput',
			id: 'password',
			label: 'Password (Default: admin)',
			width: 6,
			default: ''
		},
		{
			type: 'textinput',
			id: 'apiPollInterval',
			label: 'API Polling interval (ms) (default: 500, min: 250)',
			width: 12,
			default: 500,
			min: 250,
			max: 10000,
			regex: this.REGEX_NUMBER
		},
		{
			type: 'text',
			id: 'apiPollInfo',
			width: 12,
			label: 'API Poll Interval warning',
			value:
				'Adjusting the API Polling Interval can impact performance. <br />' +
				'A lower invterval allows for more responsive feedback, but may impact CPU usage. <br />' +
				'See the help section for more details.' 
		}

	];
};
