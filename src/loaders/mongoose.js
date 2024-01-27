const mongoose = require('mongoose');
const { config } = require('../config/config');

mongoose.Promise = Promise;

mongoose.connection.on('error', err => {
	console.log(`%cError creating db connection: ${err}`, 'color: red');
	process.exit(-1);
});

exports.connect = () => {
	mongoose
		.connect(config.db_config.connStr, {
			useCreateIndex: true,
			keepAlive: 1,
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false
		})
		.then(() => console.log(`%cMongo connection created: ${config.db_config.connStr}`, 'color: green'));
	return mongoose.connection;
};
