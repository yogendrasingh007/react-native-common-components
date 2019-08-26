import React from 'react';
import { Text, View, Image, Dimensions } from 'react-native';
import { BaseComponent, Button } from '#CommonComponents';

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
			...ViewStyles,
			primaryContainer: {
				flex: 6
			},
			secondaryContainer: {
				flex: 2,
				alignItems: 'center',
				paddingTop: 20,

				backgroundColor: Colors.DEFAULT_COLOR
			},
			title: {
				fontSize: 40,
				textShadowColor: 'grey',
				textShadowOffset: { width: 2, height: 2 },
				textShadowRadius: 4,
				textAlign: 'center',
				color: Colors.TITLE_COLOR,
				textTransform: 'uppercase'
			},
			Button: {
				marginTop: 30,
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
				marginTop: 20,
				marginHorizontal: 10
			}
		};
	}
}

export default WelcomeScene;
