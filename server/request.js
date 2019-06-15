/**
 * request
 * @author GT
 * @date 2019.05.20
 */
const request = require('request'),
	bodyParser = require('body-parser'),
	session = require('express-session'),
	Config = require('../config/index.js'),
	getToken = req => req.session && req.session.token,
	getRouterBaseURL = url => `${Config.routerBase}${url}`,
	getRequestBaseURL = url => `${Config.requestBase}${url}`;
module.exports = function (app) {
	app.use(bodyParser.json());
	app.use(session({
		secret: 'nuxt-gt',
		resave: false,
		saveUninitialized: false,
		cookie: {
			maxAge: Config.cookieMaxAge,
		},
	}));
	app.post(getRouterBaseURL('login'), (req, res) => {
		request.post(getRequestBaseURL('app_login'), {
			form: req.body,
		}, (err, response, body) => {
			if (!response) response = {
				statusCode: 500,
			};
			res.statusCode = response.statusCode;
			if (response.statusCode == 200 || response.statusCode == 304) {
				const json = JSON.parse(body);
				if (json.code == 200) {
					req.session.token = json.data.token;
					req.session.userId = json.data.user.id;
					req.session.userName = json.data.user.userName;
				}
			}
			res.send(body);
			res.end();
		});
	});
	app.post(getRouterBaseURL('logout'), (req, res) => {
		request.post(getRequestBaseURL('app_logout'), {
			headers: {
				token: getToken(req),
			},
		}, (err, response, body) => {
			if (!response) response = {
				statusCode: 500,
			};
			res.statusCode = response.statusCode;
			if (response.statusCode == 200 || response.statusCode == 304) {
				const json = JSON.parse(body);
				if (json.code == 200) delete req.session.token;
			}
			res.send(body);
			res.end();
		});
	});
};
