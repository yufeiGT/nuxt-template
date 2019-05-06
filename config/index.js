const dev = require('./config-dev'),
	prod = require('./config-prod');
module.exports = process.env.NODE_ENV === 'development' ? dev : prod;
