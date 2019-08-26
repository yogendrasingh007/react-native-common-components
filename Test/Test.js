import React, { Component } from 'react';
import Images from './res/Images';
import Strings from './res/Strings';
import Theme from './res/Theme';
import { InternsProvider, AppRoot } from '../src/BootLoader';
import SplashScene from '../src/Screens/SplashScene';
import AppControlFlow from '../src/AppControlFlow';
class Test extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<InternsProvider images={Images} strings={Strings} theme={Theme}>
				<AppRoot initialScene={<SplashScene {...this.props} />} appFlow={<AppControlFlow {...this.props} />} />
			</InternsProvider>
		);
	}
}
SplashScene;

export default Test;
