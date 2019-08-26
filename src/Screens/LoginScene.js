import React from 'react';
import { View, Text } from 'react-native';
import { BaseComponent } from '#CommonComponents';
class LoginScene extends BaseComponent {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const styles = this.styleSheet();
		return (
			<View style={styles.container}>
				<Text> LoginScene </Text>
			</View>
		);
	}
	defaultStyles() {
		const { ViewStyles } = this.theme();
		return {
			...ViewStyles
		};
	}
}

export default LoginScene;
