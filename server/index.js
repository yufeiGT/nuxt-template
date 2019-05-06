const express = require('express'),
	request = require('request'),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	consola = require('consola'),
	{
		Nuxt,
		Builder,
	} = require('nuxt'),
	app = express();

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');

/**
 * authorize
 * @author GT
 * @date 2019.05.06
 */
app.use(bodyParser.json());
app.use(session({
	secret: 'nuxt-gt',
	resave: false,
	saveUninitialized: false,
	cookie: {
		maxAge: config.cookieMaxAge,
	},
}));
app.post(`${config.router.base}login`, (req, res) => {
	request.post('http://ec2-52-83-93-248.cn-northwest-1.compute.amazonaws.com.cn:30001/app/app_login', {
		form: req.body,
	}, (err, r, body) => {
		res.statusCode = r.statusCode;
		if (r.statusCode == 200 || r.statusCode == 304) {
			const json = JSON.parse(body);
			if (json.code == 200) req.session.token = json.data.token;
		}
		res.send(body);
		res.end();
	});
});
app.post(`${config.router.base}logout`, (req, res) => {
	let token = req.session && req.session.token;
	request.post('http://ec2-52-83-93-248.cn-northwest-1.compute.amazonaws.com.cn:30001/app/app_logout', {
		headers: {
			token: token,
		},
	}, (err, r, body) => {
		res.statusCode = r.statusCode;
		if (r.statusCode == 200 || r.statusCode == 304) {
			const json = JSON.parse(body);
			if (json.code == 200) delete req.session.token;
		}
		res.send(body);
		res.end();
	});
});
// app.get('/token', (req, res) => {
// 	res.send({
// 		token: req.session.token,
// 	});
// 	res.end();
// });

async function start() {
	// Init Nuxt.js
	const nuxt = new Nuxt(config),
		{
			host,
			port,
		} = nuxt.options.server;

	// Build only in dev mode
	if (config.dev) {
		const builder = new Builder(nuxt);
		await builder.build();
	} else await nuxt.ready();

	// Give nuxt middleware to express
	app.use(nuxt.render);

	// Listen the server
	app.listen(port, host);
	consola.ready({
		message: `Server listening on http://${host}:${port}`,
		badge: true,
	});
};
start();
