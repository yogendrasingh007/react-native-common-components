import React, { Component } from 'react';
import {
	TouchableOpacity,
	StatusBar,
	StyleSheet,
	ImageBackground,
	Text,
	View,
	Animated,
	Image,
	Dimensions,
	ActivityIndicator,
	Easing
} from 'react-native';

import Images from '../res/Images';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const xOffset = new Animated.Value(0);

let position = Animated.divide(xOffset, SCREEN_WIDTH);

class Screen extends React.Component {
	render() {
		const i = this.props.index;
		return (
			<View style={styles.scrollPage}>
				<Animated.View style={[styles.screen, transitionAnimation(i)]}>
					<Image source={this.props.source} resizeMode="cover" style={{ width: '100%', height: '100%' }} />
				</Animated.View>
				<Animated.View
					style={{
						height: 300,
						opacity: position.interpolate({
							inputRange: [i - 1, i, i + 1],
							outputRange: [0.3, 1, 0.3],
							extrapolate: 'clamp'
						})
					}}
				>
					<Text
						style={{
							color: 'white',
							fontSize: 30,
							alignSelf: 'center',
							marginTop: 30,
							fontWeight: '100',
							textTransform: 'uppercase'
						}}
					>
						{text[i]}
					</Text>
					<Text
						style={{
							color: 'white',
							fontSize: 20,
							alignSelf: 'center',
							marginTop: 10
						}}
					>
						This is basic animation styling for react native. The most fundamental component for building a UI, View is
						a container that supports layout.
					</Text>
				</Animated.View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	scrollView: {
		flexDirection: 'row'
	},
	scrollPage: {
		width: SCREEN_WIDTH,
		padding: 20
	},
	screen: {
		height: SCREEN_HEIGHT - 300,

		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 25
	}
});

const transitionAnimation = index => {
	return {
		transform: [
			{ perspective: 800 },
			{
				scale: xOffset.interpolate({
					inputRange: [(index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH],
					outputRange: [0.25, 1, 0.25]
				})
			},
			{
				rotateX: xOffset.interpolate({
					inputRange: [(index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH],
					outputRange: ['45deg', '0deg', '45deg']
				})
			},
			{
				rotateY: xOffset.interpolate({
					inputRange: [(index - 1) * SCREEN_WIDTH, index * SCREEN_WIDTH, (index + 1) * SCREEN_WIDTH],
					outputRange: ['-45deg', '0deg', '45deg']
				})
			}
		]
	};
};
const PICS = [Images.welcome.source, Images.splash.source, Images.loginBg.source];
const text = ['welcome', ' welcome1', 'welcome2'];

class MoreScene extends React.Component {
	render() {
		let position = Animated.divide(xOffset, SCREEN_WIDTH);
		return (
			<ImageBackground source={Images.bg1.source} style={{ flex: 1 }}>
				<View style={{ flex: 1 }}>
					<View style={{ flex: 9.5 }}>
						<Animated.ScrollView
							scrollEventThrottle={16}
							onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: xOffset } } }], { useNativDriver: true })}
							horizontal
							pagingEnabled
							style={styles.scrollView}
							showsHorizontalScrollIndicator={false}
						>
							{PICS.map((data, i) => {
								return <Screen index={i} source={data} key={i} />;
							})}
						</Animated.ScrollView>
					</View>

					<View
						style={{
							flex: 0.5,
							backgroundColor: 'transparent',
							alignItems: 'center',
							justifyContent: 'center',
							flexDirection: 'row'
						}}
					>
						{PICS.map((_, i) => {
							let opacity = position.interpolate({
								inputRange: [i - 1, i, i + 1],
								outputRange: [0.3, 1, 0.3],
								extrapolate: 'clamp'
							});
							return (
								<Animated.View
									key={i}
									style={{ opacity, height: 10, width: 10, backgroundColor: 'white', margin: 8, borderRadius: 5 }}
								/>
							);
						})}
					</View>
				</View>
			</ImageBackground>
		);
	}
}

export default MoreScene;
