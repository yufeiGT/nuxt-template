import $ from '~/plugins';
import axios from 'axios';
const ajax = (options = {}, success = () => {}, error = () => {}) => {
	let op = $.extend(true, {
		url: '',
		params: {},
	}, options);
	axios.post(op.url, op.params).then(res => {
		if ((res.status != 200 && res.status != 304) || res.data.code != 200) {
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
	});;
};
export function Login(params, ...param) {
	ajax({
		url: 'login',
		params,
	}, ...param);
};
export function Logout( ...param) {
	ajax({
		url: 'logout',
	}, ...param);
};
