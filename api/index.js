import {
	asyncAjax,
	ajax,
} from '~/plugins/axios';

export function verifyCode(timestamp, ...param) {
	ajax({
		url: 'verifyCode',
		data: {
			timestamp,
		},
	}, ...param);
};
export async function findNavListByLocationTop(context, ...param) {
	return await asyncAjax({
		url: 'navigation/findNavListByLocation',
		context,
		params: {
			location: -1,
		},
	}, ...param)
};
