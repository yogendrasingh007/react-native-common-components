import React, { Component } from 'react';
import { Animated, Text, View, Dimensions, Button } from 'react-native';

const screenwidth = Dimensions.get('screen').width;
const screenheight = Dimensions.get('screen').height;
class FadeInView extends React.Component {
	state = {
		fadeAnim: new Animated.Value(0),
		fadeAnim2: new Animated.Value(0)
	};

	animatebutton() {
		Animated.timing(this.state.fadeAnim, {
			toValue: screenheight,
			duration: 1000
		}).start();
		Animated.timing(this.state.fadeAnim2, {
			toValue: screenwidth,
			duration: 1000
		}).start();
	}

	render() {
		let { fadeAnim, fadeAnim2 } = this.state;

		return (
			<Animated.View
				style={{
					...this.props.style,
					height: fadeAnim,
					width: fadeAnim2
				}}
			>
				{this.props.children}
			</Animated.View>
		);
	}
}

export default class OrderScene extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	animatebutton() {
		this.fade.animatebutton();
	}

	render() {
		return (
			<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
				<FadeInView style={{ backgroundColor: 'powderblue' }} ref={ani => (this.fade = ani)}>
					<Text style={{ fontSize: 28, textAlign: 'center', margin: 10 }}>Fading in</Text>
				</FadeInView>
				<Button title="go animate" onPress={() => this.animatebutton()} />
			</View>
		);
	}
}
