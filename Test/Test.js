import React, { Component } from 'react';
import Images from './res/Images';
import Strings from './res/Strings';
import Theme from './res/Theme';
import { InternsProvider, AppRoot } from '../src/BootLoader';
import SplashScene from '../src/Screens/SplashScene';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import Reducer from '../src/Redux/Reducers/AppReducer';

import AppControlFlow from '../src/AppControlFlow';

const store = createStore(Reducer);
class Test extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Provider store={store}>
				<InternsProvider images={Images} strings={Strings} theme={Theme}>
					<AppRoot initialScene={<SplashScene {...this.props} />} appFlow={<AppControlFlow {...this.props} />} />
				</InternsProvider>
			</Provider>
		);
	}
}
SplashScene;

export default Test;
