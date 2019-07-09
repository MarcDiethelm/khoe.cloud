const pkg = require('./package')
require('dotenv').config()

module.exports = {
	mode: 'universal',

	manifest: {
		name: pkg.config.sitename,
		author: null,
		description:
			'Essential data privacy and security for everyone by making self-hosting basic services trivial and secure.',
		lang: 'en-US',
		background_color: '#1e1e2f',
		ogHost: pkg.config.host,
		ogImage: '/img/protea.png',
		twitterSite: '@KhoeCloud'
	},

	/*
	 ** Headers of the page
	 */
	head: {
		title: pkg.config.sitename,
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: pkg.description }
		]
	},

	/*
	 ** Customize the progress-bar color
	 */
	loading: { color: '#fff' },

	/*
	 ** Global CSS
	 */
	css: [
		'@/assets/dashboard/sass/black-dashboard.scss',
		'@/assets/dashboard/css/googlefonts.css',
		'@/assets/dashboard/css/nucleo-icons.css',
		'@/assets/css/main.scss'
	],

	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: ['~/plugins/blackDashboard.js'],

	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/pwa',
		'@marcdiethelm/nuxtjs-countly'
	],
	/*
	 ** Axios module configuration
	 */
	axios: {
		// See https://github.com/nuxt-community/axios-module#options
		baseURL: process.env.KHOE_BASE_URL || 'http://localhost:3000'
	},

	/*
	 ** nuxtjs-countly module configuration
	 */
	countly: {
		url: process.env.KHOE_COUNTLY_URL,
		app_key: process.env.KHOE_COUNTLY_APP_KEY,
		trackerSrc: process.env.KHOE_COUNTLY_TRACKER_SRC,
		trackers: ['track_sessions', 'track_pageview', 'track_links'],
		interval: 2000,
		debug: process.env.NODE_ENV !== 'production'
	},

	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
		}
	},
	serverMiddleware: ['~/api/index.js']
}
