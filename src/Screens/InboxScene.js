import React from 'react';
import { StatusBar, View, Text, ImageBackground } from 'react-native';
import { BaseComponent, Button } from '#CommonComponents';
import { connect } from 'react-redux';

class InboxScene extends BaseComponent {
	render() {
		if (this.props.isLogin) {
			return (
				<View>
					<Text>Location welcome</Text>
				</View>
			);
		} else {
			return (
				<ImageBackground source={this.appImages('emptyView').source} style={{ flex: 1 }} resizeMode="contain">
					<View></View>
				</ImageBackground>
			);
		}
	}
}

const mapStateToProps = state => {
	return { isLogin: state.isLogin };
};

export default connect(mapStateToProps)(InboxScene);
