import React, { Component } from 'react';
import { StatusBar, View, Text, Image, ImageBackground, TextInput, Dimensions } from 'react-native';
import Images from './Images';
import { BaseComponent } from '#CommonComponents';

const images = [
	Images.bgReward1.source,
	Images.bgReward2.source,
	Images.bgReward3.source,
	Images.bgReward4.source,
	Images.bgReward5.source
];

export default class MeterReward extends BaseComponent {
	constructor() {
		super();
		this.state = { rewardText: 200, i: 0, max: '' };
	}
	renderText(styles) {
		return (
			<View style={styles.primaryContainer}>
				<View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 3 }}>
					<Text style={styles.rewardText}>{this.state.rewardText}</Text>
					<Text style={styles.rewardpoint}>POINTS</Text>
				</View>

				<View style={{}}>
					<Text style={styles.subTitle}>20 Banquet Bucks Earned</Text>
				</View>
			</View>
		);
	}
	renderImage(styles) {
		const { max, rewardText } = this.state;

		return (
			<View style={styles.secondaryContainer}>
				{rewardText >= 0 && rewardText <= max / 5 && (
					<ImageBackground
						source={images[0]}
						resizeMode="cover"
						style={{ flex: 1, width: '100%', height: '100%' }}
					></ImageBackground>
				)}
				{rewardText > max / 5 && rewardText <= (2 * max) / 5 && (
					<ImageBackground
						source={images[1]}
						resizeMode="cover"
						style={{ flex: 1, width: '100%', height: '100%' }}
					></ImageBackground>
				)}
				{rewardText > (2 * max) / 5 && rewardText <= (3 * max) / 5 && (
					<ImageBackground
						source={images[2]}
						resizeMode="cover"
						style={{ flex: 1, width: '100%', height: '100%' }}
					></ImageBackground>
				)}
				{rewardText > (3 * max) / 5 && rewardText <= (4 * max) / 5 && (
					<ImageBackground
						source={images[3]}
						resizeMode="cover"
						style={{ flex: 1, width: '100%', height: '100%' }}
					></ImageBackground>
				)}
				{rewardText > (4 * max) / 5 && rewardText <= max && (
					<ImageBackground
						source={images[4]}
						resizeMode="cover"
						style={{ flex: 1, width: '100%', height: '100%' }}
					></ImageBackground>
				)}
				{rewardText > max && re(
					<ImageBackground
						source={images[0]}
						resizeMode="cover"
						style={{ flex: 1, width: '100%', height: '100%' }}
					></ImageBackground>
				)}
			</View>
		);
	}
	render() {
		const styles = this.styleSheet();
		return (
			<ImageBackground source={Images.bg.source} style={{ flex: 1 }}>
				<View style={styles.container}>
					{this.renderText(styles)}
					{this.renderImage(styles)}
					<View style={styles.thirdContainer}>
						<TextInput
							placeholder="enter maximum range"
							style={styles.input}
							onChangeText={text => this.setState({ max: text })}
						/>
						<TextInput
							placeholder="enter value "
							style={styles.input}
							onChangeText={text => this.setState({ rewardText: text })}
						/>
					</View>
				</View>
			</ImageBackground>
		);
	}

	defaultStyles() {
		return {
			container: {
				flex: 1
			},
			primaryContainer: {
				flex: 2,
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column'
			},
			secondaryContainer: {
				flex: 6
			},
			thirdContainer: {
				flex: 2,
				flexDirection: 'column'
			},
			rewardText: {
				fontSize: 40,
				color: 'rgb( 232, 195, 90)',
				fontFamily: 'FuturaStd-ExtraBold',
				fontWeight: 'bold'
			},
			rewardpoint: {
				fontSize: 21,
				color: 'rgb( 232, 195, 90)',
				fontFamily: 'FuturaStd-ExtraBold',
				fontWeight: 'bold',
				marginTop: 10
			},
			subTitle: {
				fontSize: 21,
				margin: 2,
				color: 'white',
				fontFamily: 'FuturaStd-ExtraBold',
				fontWeight: 'bold'
			},
			bottomText: {
				fontSize: 14,
				margin: 15,
				color: 'white',
				fontFamily: 'FuturaStd-ExtraBold',
				fontWeight: 'bold',
				textTransform: 'uppercase',
				alignSelf: 'center'
			},
			input: {
				backgroundColor: 'grey',
				margin: 15
			}
		};
	}
	// componentDidMount() {
	// 	this.Interval = setInterval(() => {
	// 		const newText = this.state.rewardText;
	// 		const newImageSource = this.state.imageSource;
	// 		if (this.state.rewardText < 1000) {
	// 			this.setState({ rewardText: newText + 200, i: this.state.i + 1 });
	// 		}
	// 	}, 1000);
	// }
}
