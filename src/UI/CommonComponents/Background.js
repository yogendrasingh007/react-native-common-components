// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import { ImageBackground, View } from 'react-native';
// import { BaseComponent } from './BaseComponent';
// import { Images } from '../../res/Images';

// class Background extends BaseComponent {
// 	render() {
// 		const { Colors } = this.theme();

// 		const viewStyle = { flex: 1, width: '100%', height: '100%', backgroundColor: 'rgb(73, 58, 244)' };
// 		return (
// 			<ImageBackground source={Images.splash.source} style={[viewStyle, background.source, this.props.style]}>
// 				{this.props.children}
// 			</ImageBackground>
// 		);
// 	}
// }

// class BackgroundCommon extends BaseComponent {
// 	render() {
// 		const { Colors } = this.theme();

// 		const viewStyle = { flex: 1, width: '100%', height: '100%', backgroundColor: 'rgb(73, 58, 244)' };
// 		return (
// 			<ImageBackground source={Images['splash1'].source} style={[viewStyle, background.source, this.props.style]}>
// 				{this.props.children}
// 			</ImageBackground>
// 		);
// 	}
// }

// Background.propTypes = {
// 	children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]).isRequired,
// 	type: PropTypes.oneOf(['splash', 'splash1', 'buttonBg']),
// 	style: PropTypes.object
// };

// Background.defaultProps = {
// 	type: 'splash',
// 	style: null
// };

// const BackgroundHOC = (SomeComponent, { type = 'none', style = null } = {}) => {
// 	return class extends React.Component {
// 		render() {
// 			return (
// 				<Background type={type} style={style}>
// 					<SomeComponent {...this.props} />
// 				</Background>
// 			);
// 		}
// 	};
// };

// const BackgroundCommonHOC = (SomeComponent, { type = 'none', style = null } = {}) => {
// 	return class extends React.Component {
// 		render() {
// 			return (
// 				<BackgroundCommon type={type} style={style}>
// 					<SomeComponent {...this.props} />
// 				</BackgroundCommon>
// 			);
// 		}
// 	};
// };

// module.exports = {
// 	Background,
// 	BackgroundHOC,

// 	BackgroundCommonHOC
// };
