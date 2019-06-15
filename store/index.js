export const state = () => ({
	// 用户凭证
	token: '',
	// 用户ID
	userId: '',
	// 用户名称
	username: '',
	// 记住账号
	remember: true,
	// 两周内自动登录
	autoLogin: '',
	// 注册完成
	registerSuccess: false,
});

export const mutations = {
	setToken(state, value) {
		state.token = value;
	},
	setUserID(state, value) {
		state.userId = value;
	},
	setUserName(state, value) {
		state.username = value;
	},
};

export const actions = {
	async nuxtServerInit({
		commit,
	}, {
		req,
	}) {
		await commit('setToken', req.session && req.session.token || '');
		await commit('setUserID', req.session && req.session.userId || '');
		await commit('setUserName', req.session && req.session.username || '');
	},
};
