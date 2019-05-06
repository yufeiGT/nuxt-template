import $ from '~/plugins';
import Config from '~/config';
let axios, redirect, store;
export default (app) => {
	axios = app.$axios;
	redirect = app.redirect;
	store = app.store;
};
export function ajax(op = {}, success = () => {}, error = () => {}) {
	axios($.extend(true, {
		url: '',
		method: Config.method,
		headers: {
			token: store.state.token,
		},
		params: {},
	}, op)).then(res => {
		if ((res.status != 200 && res.status != 304) || res.data.code != 200) {
			if (res.data.code == 10005) return redirect('/login');
			if (process.env.NODE_ENV === 'development') throw res;
			return error(res.data || {});
		}
		success(res.data || {});
	}).catch(res => {
		if (!res.response) res.response = {};
		if (!res.response.data) res.response.data = {};
		error($.extend(true, {
			code: res.response.data.status,
		}, res.response.data));
		if (process.env.NODE_ENV === 'development') throw res;
	});
};
