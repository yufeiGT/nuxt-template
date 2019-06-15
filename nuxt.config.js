const pkg = require('./package'),
	config = require('./config');

module.exports = {
	mode: 'universal',
	router: {
		scrollBehavior: (to, from, savedPosition) => {
			return savedPosition;
		},
		base: config.routerBase,
	},
	server: {
		host: '127.0.0.1',
		port: config.port,
	},
	/*
	 ** Headers of the page
	 */
	head: {
		title: 'nuxt-template',
		meta: [{
			charset: 'utf-8'
		}, {
			name: 'viewport',
			content: 'width=device-width, initial-scale=1'
		}, {
			hid: 'description',
			name: 'description',
			content: pkg.description
		}],
		link: [{
			rel: 'icon',
			type: 'image/x-icon',
			href: '/favicon.png'
		}]
	},
	/*
	 ** Customize the progress-bar color
	 */
	loading: {
		color: '#E60012'
	},

	/*
	 ** Global CSS
	 */
	css: [],

	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: ['@/plugins/elementUI', {
		src: '@plugins/axios',
		ssr: false,
	}, {
		src: '@plugins/localStorage',
		ssr: false,
	}, ],

	/*
	 ** Nuxt.js modules
	 */
	modules: ['@nuxtjs/axios'],

	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {},
		vendor: ['axios', 'element-ui'],
	}
}
