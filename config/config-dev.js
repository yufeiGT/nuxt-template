module.exports = {
	port: 8787,
	routerBase: '/',
	axios: {
		proxy: true,
		prefix: '/app',
		credentials: true,
	},
	proxy: {
		'/app': {
			target: 'http://ec2-52-83-93-248.cn-northwest-1.compute.amazonaws.com.cn:30001/',
			pathRewrite: {
				changeOrigin: true,
			},
		},
	},
	method: 'post',
};
