import React from 'react';
import { Text, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import BaseComponent from './BaseComponent';
const { width } = Dimensions.get('window');

class Button extends BaseComponent {
	renderIcon() {
		const { buttonImageStyle, buttonImageText } = this.styleSheet();
		if (this.props.ImgBackground && this.props.ImgBackground.source) {
			return (
				<ImageBackground source={this.props.ImgBackground.source} style={[buttonImageStyle, this.props.style]}>
					<Text adjustsFontSizeToFit style={[buttonImageText, this.props.textStyle]}>
						{this.props.buttonImageText}
					</Text>
				</ImageBackground>
			);
		}
	}

	renderChild() {
		if (typeof this.props.children === 'string') {
			const { buttonText } = this.styleSheet();
			return (
				<Text adjustsFontSizeToFit style={[buttonText, this.props.textStyle]}>
					{this.props.children}
				</Text>
			);
		}
		return this.props.children;
	}
	render() {
		const { button } = this.styleSheet();
		return (
			<TouchableOpacity style={[button, this.props.style]} onPress={this.props.onPress}>
				{this.renderIcon()}
				{this.renderChild()}
			</TouchableOpacity>
		);
	}

	defaultStyles() {
		const { Colors } = this.theme();
		return {
			button: {
				height: 46,
				alignItems: 'center',
				justifyContent: 'center',
				width: width * 0.8,
				backgroundColor: Colors.BUTTON_BACKGROUND_COLOR
			},
			buttonText: {
				textAlign: 'center',
				marginHorizontal: 10,
				fontSize: 18,
				color: Colors.BUTTON_TEXT_COLOR
			},
			buttonImageStyle: {
				height: 46,
				width: width * 0.8,
				justifyContent: 'center',
				alignItems: 'center'
			},
			buttonImageText: {
				color: Colors.BUTTON_TEXT_COLOR
			}
		};
	}
}

Button.propTypes = {
	style: PropTypes.object,
	onPress: PropTypes.func
};

Button.defaultProps = {
	style: null,
	onPress: () => null
};

export default Button;
