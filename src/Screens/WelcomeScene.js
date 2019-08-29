import React from 'react';
import { Text, View, Image, StatusBar, Dimensions } from 'react-native';
import { BaseComponent, Button } from '#CommonComponents';
import { connect } from 'react-redux';

const { width } = Dimensions.get('window');
class WelcomeScene extends BaseComponent {
	renderImage(styles) {
		return (
			<View style={styles.primaryContainer}>
				<Image source={this.appImages('welcome').source} style={{ width: '100%', height: '100%' }} />
			</View>
		);
	}
	renderTitle(styles) {
		return <Text style={styles.title}>{this.ls('welcome')}</Text>;
	}
	renderDescription(styles) {
		return <Text style={styles.description}>{this.ls('description')}</Text>;
	}

	renderButton(styles) {
		return (
			<Button
				onPress={() => this.props.navigation.navigate('login')}
				ImgBackground={this.appImages('buttonBg')}
				style={styles.Button}
				textStyle={styles.buttonTitle}
				buttonImageText={this.ls('started')}
			/>
		);
	}

	render() {
		const styles = this.styleSheet();

		return (
			<View style={styles.container}>
				<StatusBar translucent={true} backgroundColor={'transparent'} />
				{this.renderImage(styles)}
				<View style={styles.secondaryContainer}>
					{this.renderTitle(styles)}
					{this.renderDescription(styles)}
					{this.renderButton(styles)}
				</View>
			</View>
		);
	}

	defaultStyles() {
		const { Colors, ViewStyles } = this.theme();
		return {
			primaryContainer: {
				height: '70%'
			},
			secondaryContainer: {
				height: '30%',

				alignItems: 'center'
			},
			title: {
				fontSize: 25,
				textShadowColor: 'grey',
				textShadowOffset: { width: 2, height: 2 },
				textShadowRadius: 4,
				textAlign: 'center',
				color: Colors.TITLE_COLOR,
				textTransform: 'uppercase',
				marginTop: 20
			},
			Button: {
				marginTop: 10,
				margin: 10,
				width: width * 0.8,
				backgroundColor: 'transparent'
			},
			buttonTitle: {
				fontSize: 18,
				textShadowColor: 'grey',
				textShadowOffset: { width: 2, height: 2 },
				textShadowRadius: 4,
				color: Colors.BUTTON_TEXT_COLOR,
				textTransform: 'uppercase',
				elevation: 3
			},
			description: {
				fontSize: 18,
				color: 'grey',
				textAlign: 'center',
				marginTop: 13,
				marginHorizontal: 10
			}
		};
	}
}
const mapStateToProps = state => {
	return { isLogin: state.isLogin };
};

export default connect(mapStateToProps)(WelcomeScene);
