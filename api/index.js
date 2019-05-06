import {
	ajax,
} from '~/plugins/axios';
export function getAllSignInDetails(...param) {
	ajax({
		url: 'user/getAllSignInDetails',
	}, ...param);
};
