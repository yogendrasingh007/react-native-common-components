import { createStackNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import { WelcomeScene, LoginScene } from './Screens';

const MainNavigator = createStackNavigator(
	{
		Home: WelcomeScene,
		login: LoginScene
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
