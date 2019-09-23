import { createStackNavigator, createAppContainer } from 'react-navigation';
import React from 'react';
import { WelcomeScene, LoginScene } from './Screens';

import TabBar from './TabBar';
import { BackgroundHOC, BackgroundCommonHOC } from './UI/CommonComponents/Background';

const FadeTransition = (index, position) => {
	const sceneRange = [index - 1, index];
	const outputOpacity = [0, 1];
	const transition = position.interpolate({
		inputRange: sceneRange,
		outputRange: outputOpacity
	});
	return { opacity: transition };
};

const NavigationConfig = () => {
	return {
		screenInterpolator: sceneProps => {
			const position = sceneProps.position;
			const index = sceneProps.index;
			const scene = sceneProps.scene;
			const height = sceneProps.layout.initHeight;

			return BottomTransition(index, position, height);
		}
	};
};

const BottomTransition = (index, position, height) => {
	const sceneRange = [index - 1, index];
	const outputHeight = [height, 0];
	const transition = position.interpolate({
		inputRange: sceneRange,
		outputRange: outputHeight
	});
	return { transform: [{ translateY: transition }] };
};

const MainNavigator = createStackNavigator(
	{
		Home: WelcomeScene,
		login: BackgroundHOC(LoginScene),
		TabBar: TabBar
	},
	{
		headerMode: 'none',
		transitionConfig: NavigationConfig
	}
);

const AppContainer = createAppContainer(MainNavigator);

export default class AppControlFlow extends React.Component {
	render() {
		return <AppContainer />;
	}
}
