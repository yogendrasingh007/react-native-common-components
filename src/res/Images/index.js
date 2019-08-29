const Background = {
	splash: { source: require('./Background/splash.png'), style: { height: '100%', width: '100%' } },
	background1: { source: require('./Background/background1.png'), style: { height: '100%', width: '100%' } },
	loginBg: { source: require('./Background/loginbg.png'), style: { height: '100%', width: '100%' } },
	emptyView: { source: require('./Background/emptyView.png'), style: { height: '100%', width: '100%' } }
};
const Welcome = {
	welcome: { source: require('./Welcome/welcome.png'), style: { height: '100%', width: '100%' } },
	buttonBg: { source: require('./Welcome/buttonBg.png'), style: { height: 50, width: 200 } }
};
const tabIconStyle = { width: 34, height: 34 };
const tabIconActiveStyle = { ...tabIconStyle, opacity: 0.4 };

const tabs = {
	tab1: { source: require('./tabs/tab1.png'), style: tabIconStyle },
	tab1Selected: { source: require('./tabs/tab1_active.png'), style: tabIconActiveStyle },
	tab2: { source: require('./tabs/tab2.png'), style: tabIconStyle },
	tab2Selected: { source: require('./tabs/tab2_active.png'), style: tabIconActiveStyle },
	tab3: { source: require('./tabs/tab3.png'), style: tabIconStyle },
	tab3Selected: { source: require('./tabs/tab3_active.png'), style: tabIconActiveStyle },
	tab4: { source: require('./tabs/tab4.png'), style: tabIconStyle },
	tab4Selected: { source: require('./tabs/tab4_active.png'), style: tabIconActiveStyle },
	tab5: { source: require('./tabs/tab5.png'), style: tabIconStyle },
	tab5Selected: { source: require('./tabs/tab5_active.png'), style: tabIconActiveStyle }
};
module.exports = {
	...Background,
	...Welcome,
	...tabs
};
