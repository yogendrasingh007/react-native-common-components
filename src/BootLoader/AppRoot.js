import React, { Component } from 'react';
import { View } from 'react-native';

class AppRoot extends Component {
	constructor(props) {
		super(props);
		this.startAppFlow = this.startAppFlow.bind(this);
		this.state = {
			rootScreen: 'FirstLandingPage'
		};
		setTimeout(() => {
			this.startAppFlow();
		}, 2000);
	}
	startAppFlow() {
		this.setState({ rootScreen: 'AppFlow' });
	}
	renderFirstLandingScene() {
		return this.props.initialScene;
	}
	renderAppFlow() {
		return this.props.appFlow;
	}
	render() {
		let child = null;
		if (this.state.rootScreen === 'FirstLandingPage') {
			child = this.renderFirstLandingScene();
		} else {
			child = this.renderAppFlow();
		}
		return <View style={{ flex: 1 }}>{child}</View>;
	}
}

export default AppRoot;
