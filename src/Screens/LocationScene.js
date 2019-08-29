import React from 'react';
import { StatusBar, View, Text, ImageBackground } from 'react-native';
import { BaseComponent, Button } from '#CommonComponents';
import { connect } from 'react-redux';

class LocationScene extends BaseComponent {
	render() {
		if (this.props.isLogin) {
			return (
				<View>
					<Text>Location welcome</Text>
				</View>
			);
		} else {
			return (
				<View>
					<Text>login login not login</Text>
				</View>
			);
		}
	}
}

const mapStateToProps = state => {
	return { isLogin: state.isLogin };
};

export default connect(mapStateToProps)(LocationScene);
