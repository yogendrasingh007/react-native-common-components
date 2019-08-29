import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, View } from 'react-native';
import BaseComponent from './BaseComponent';
import { Images } from '../../res/Images';

class Background extends BaseComponent {
	render() {
		const { Colors } = this.theme();

		const viewStyle = { flex: 1, width: '100%', height: '100%' };
		return (
			<ImageBackground
				source={this.appImages('loginBg').source}
				imageStyle={{ opacity: 0.5 }}
				style={[viewStyle, this.props.style]}
			>
				{this.props.children}
			</ImageBackground>
		);
	}
}

class BackgroundCommon extends BaseComponent {
	render() {
		const { Colors } = this.theme();

		const viewStyle = { flex: 1, width: '100%', height: '100%', backgroundColor: 'rgb(73, 58, 244)' };
		return (
			<ImageBackground source={Images['splash1'].source} style={[viewStyle, background.source, this.props.style]}>
				{this.props.children}
			</ImageBackground>
		);
	}
}

Background.propTypes = {
	children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,

	style: PropTypes.object
};

Background.defaultProps = {
	style: null
};

const BackgroundHOC = (SomeComponent, { type = 'none', style = null } = {}) => {
	return class extends React.Component {
		render() {
			return (
				<Background style={style}>
					<SomeComponent {...this.props} />
				</Background>
			);
		}
	};
};

const BackgroundCommonHOC = (SomeComponent, { type = 'none', style = null } = {}) => {
	return class extends React.Component {
		render() {
			return (
				<BackgroundCommon type={type} style={style}>
					<SomeComponent {...this.props} />
				</BackgroundCommon>
			);
		}
	};
};

module.exports = {
	Background,
	BackgroundHOC,

	BackgroundCommonHOC
};
