const Background = {
	splash: { source: require('./Background/splash.png'), style: { height: '100%', width: '100%' } }
};
const Welcome = {
	welcome: { source: require('./Welcome/welcome.png'), style: { height: '100%', width: '100%' } },
	buttonBg: { source: require('./Welcome/buttonBg.png'), style: { height: 50, width: 200 } }
};
module.exports = {
	...Background,
	...Welcome
};
