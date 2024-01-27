const app = require('./loaders/express');
const mongoose = require('./loaders/mongoose');
const { config } = require('./config/config');  

mongoose.connect();

app.listen(config.api_config.api_port, () =>
	console.log(
		`%cAPI Running on: ${config.api_config.api_host}:${config.api_config.api_port}${config.api_config.api_base_url}`,
		'color: green'
	)
);

/**
 * Exports express
 * @public
 */
module.exports = app;
