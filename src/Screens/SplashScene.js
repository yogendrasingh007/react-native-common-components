import React from 'react';
import { StatusBar, View, ImageBackground } from 'react-native';
import { BaseComponent, Loader } from '#CommonComponents';
import PropTypes from 'prop-types';

export default class SplashScene extends BaseComponent {
	renderSpinner() {
		return <Loader style={'Circle'} />;
	}

	render() {
		const styles = this.styleSheet();
		return (
			<ImageBackground source={this.appImages('welcome').source} style={{ flex: 1, opacity: 0.7 }}>
				<View style={styles.container}>
					<StatusBar translucent={true} backgroundColor={'transparent'} />
					{this.renderSpinner()}
				</View>
			</ImageBackground>
		);
	}

	defaultStyles() {
		const { ViewStyles } = this.theme();
		return {
			container: {
				...ViewStyles.container,
				backgroundColor: 'transparent',
				justifyContent: 'center',
				alignItems: 'center'
			}
		};
	}
}

SplashScene.propTypes = {
	imageSource: PropTypes.oneOfType([
		PropTypes.shape({
			uri: PropTypes.string
		}),
		PropTypes.number
	]),
	backgroundImage: PropTypes.oneOfType([
		PropTypes.shape({
			uri: PropTypes.string
		}),
		PropTypes.number
	])
};
