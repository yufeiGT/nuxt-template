const pkg = require('./package'),
	config = require('./config');

module.exports = {
	mode: 'universal',
	router: {
		base: config.routerBase,
	},
	server: {
		host: '0.0.0.0',
		port: config.port,
	},
	axios: config.axios,
	proxy: config.proxy,
	cookieMaxAge: 1000 * 60,
	/*
	 ** Headers of the page
	 */
	head: {
		title: pkg.name,
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
			href: '/favicon.ico'
		}]
	},

	/*
	 ** Customize the progress-bar color
	 */
	loading: {
		color: '#fff'
	},

	/*
	 ** Global CSS
	 */
	css: [
		'iview/dist/styles/iview.css'
	],

	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		'@/plugins/iview', {
			src: '@/plugins/axios',
			ssr: false,
		}, {
			src: '@plugins/localStorage',
			ssr: false,
		},
	],

	/*
	 ** Nuxt.js modules
	 */
	modules: [
		'@nuxtjs/axios',
	],

	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {},
		vendor: ['axios'],
	}
}
