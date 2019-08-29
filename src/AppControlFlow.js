import { createStackNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import { WelcomeScene, LoginScene } from './Screens';

import TabBar from './TabBar';
import { BackgroundHOC, BackgroundCommonHOC } from './UI/CommonComponents/Background';

const MainNavigator = createStackNavigator(
	{
		Home: WelcomeScene,
		login: BackgroundHOC(LoginScene),
		TabBar: TabBar
	},
	{
		headerMode: 'none'
	}
);

const AppContainer = createAppContainer(MainNavigator);

export default class AppControlFlow extends React.Component {
	render() {
		return <AppContainer />;
	}
}
