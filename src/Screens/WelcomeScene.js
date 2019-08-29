import React from 'react';
import { Text, View, Image, StatusBar, Dimensions } from 'react-native';
import { BaseComponent, Button } from '#CommonComponents';
import { connect } from 'react-redux';

const { width, height } = Dimensions.get('window');
class WelcomeScene extends BaseComponent {
	renderImage(styles) {
		return (
			<Image
				source={this.appImages('welcome').source}
				style={{ width: '100%', resizeMode: 'repeat', height: '100%' }}
			/>
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
<<<<<<< HEAD
			<View style={styles.container}>
				<StatusBar translucent={true} backgroundColor={'transparent'} />
=======
			<View style={styles.secondaryContainer}>
>>>>>>> muskan
				{this.renderImage(styles)}

				<View style={{ alignItems: 'center', paddingVertical: height * 0.03 }}>
					{this.renderTitle(styles)}
					{this.renderDescription(styles)}
					{this.renderButton(styles)}
				</View>
			</View>
			// </ImageBackground>
		);
	}

	defaultStyles() {
		const { Colors, ViewStyles } = this.theme();
		return {
<<<<<<< HEAD
			primaryContainer: {
				height: '70%'
			},
			secondaryContainer: {
				height: '30%',

				alignItems: 'center'
=======
			...ViewStyles,
			primaryContainer: {},
			secondaryContainer: {
				flex: 1,
				justifyContent: 'flex-end'
>>>>>>> muskan
			},
			title: {
				fontSize: 30,
				textShadowColor: 'grey',
				textShadowOffset: { width: 2, height: 2 },
				textShadowRadius: 4,
				textAlign: 'center',
				color: Colors.TITLE_COLOR,
				textTransform: 'uppercase'
			},
			Button: {
<<<<<<< HEAD
				marginTop: 10,
				margin: 10,
=======
>>>>>>> muskan
				width: width * 0.8,
				marginTop: height * 0.02,
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
				fontSize: 16,
				color: 'grey',
				textAlign: 'center',
<<<<<<< HEAD
				marginTop: 13,
=======
				marginTop: height * 0.02,
>>>>>>> muskan
				marginHorizontal: 10
			}
		};
	}
}
const mapStateToProps = state => {
	return { isLogin: state.isLogin };
};

export default connect(mapStateToProps)(WelcomeScene);
