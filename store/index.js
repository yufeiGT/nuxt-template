export const state = () => ({
	token: '',
});

export const mutations = {
	setToken(state, token) {
		state.token = token;
	},
};

export const actions = {
	nuxtServerInit({
		commit,
	}, {
		req,
	}) {
		if (req.session && req.session.token) commit('setToken', req.session.token);
	},
};
