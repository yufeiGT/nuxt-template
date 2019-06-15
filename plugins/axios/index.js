import $ from '~/plugins';
import axios from 'axios';
import requestURL from '~/config/url';
let $store, $redirect;
export default ({
	store,
	redirect,
}) => {
	$store = store;
	$redirect = redirect;
};
export async function asyncAjax(op = {}, success = () => {}, error = () => {}) {
	const {
		store,
		redirect,
	} = op.context || {
		store: {
			state: {
				token: '',
			},
		},
		redirect() {},
	};
	return await axios($.extend({
		method: 'post',
		headers: {
			token: store.state.token,
		},
		params: {},
	}, op, {
		url: `${requestURL}${op.url}`,
	})).then(async res => {
		if ((res.status != 200 && res.status != 304) || res.data.code != 200) {
			if (res.data.code == 10005) return redirect('/login');
			if (process.env.NODE_ENV === 'development') console.error(res);
			return await error(res.data || {});
		}
		return await success(res.data || {});
	}).catch(async res => {
		
		if (!res.response) res.response = {};
		if (!res.response.data) res.response.data = {};
		if (process.env.NODE_ENV === 'development') console.error(res);
		return await error($.extend(true, {
			code: res.response.data.status,
		}, res.response.data));
	});
};
export function ajax(op = {}, success = () => {}, error = () => {}) {
	return axios($.extend(true, {
		url: '',
		method: 'post',
		headers: {
			token: $store.state.token,
		},
		params: {},
	}, op, {
		url: `${requestURL}${op.url}`,
	})).then(async res => {
		if ((res.status != 200 && res.status != 304) || res.data.code != 200) {
			if (res.data.code == 10005) return $redirect('/login');
			if (process.env.NODE_ENV === 'development') console.error(res);
			return await error(res.data || {});
		}
		return await success(res.data || {});
	}).catch(async res => {
		if (!res.response) res.response = {};
		if (!res.response.data) res.response.data = {};
		if (process.env.NODE_ENV === 'development') console.error(res);
		/*return await error(res)*/;
		 	return await error($.extend(true, {
			code: res.response.data.status,
		 }, res.response.data));
	});
};
