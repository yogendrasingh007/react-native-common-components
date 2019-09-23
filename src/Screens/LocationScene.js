import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity, LayoutAnimation } from 'react-native';

class LocationScene extends Component {
	constructor() {
		super();

		this.state = {
			check: false
		};
	}

	onPresscheck() {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);

		//LayoutAnimation.configureNext(CustomLayoutAnimation);

		this.setState({ check: !this.state.check });
	}

	render() {
		var middleStyle = this.state.check === false ? { width: 20, height: 20 } : { width: '100%', height: '100%' };

		return (
			<View style={styles.container}>
				<TouchableOpacity style={styles.button} onPress={() => this.onPresscheck()}>
					<Text>pressbutton</Text>
				</TouchableOpacity>
				<View style={[middleStyle, { backgroundColor: 'seagreen' }]} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	button: {
		width: '100%',
		height: 60,
		backgroundColor: 'blue',
		alignItems: 'center',
		justifyContent: 'center',
		margin: 8
	}
});

export default LocationScene;
