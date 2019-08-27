import React from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import { BaseComponent, Button } from '#CommonComponents';

const { width, height } = Dimensions.get('window');
class WelcomeScene extends BaseComponent {
	renderImage(styles) {
		return (
			<View style={{ flex: 1 }}>
				<Image
					source={this.appImages('welcome').source}
					style={{ width: '100%', resizeMode: 'contain', position: 'relative' }}
				/>
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
			<View style={styles.secondaryContainer}>
				{this.renderImage(styles)}

				<View style={{ alignItems: 'center', backgroundColor: 'white', paddingVertical: height * 0.03 }}>
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
			...ViewStyles,
			primaryContainer: {},
			secondaryContainer: {
				flex: 1,
				justifyContent: 'flex-end'
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
				marginTop: height * 0.02,
				marginHorizontal: 10
			}
		};
	}
}

export default WelcomeScene;
