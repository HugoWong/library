const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
    title: '君玉自牧',
    description: '君子温如玉，卑以自牧也',
	base: '/',
    head,
	theme: 'vdoing',
	themeConfig,
	plugins,
	markdown: {
		lineNumbers: true,
		extractHeaders: [ 'h2', 'h3', 'h4' ],
	},
}