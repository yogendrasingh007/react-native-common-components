import React from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';
import BaseComponent from './BaseComponent';

class Loader extends BaseComponent {
	render() {
		const styles = this.styleSheet();
		return (
			<Modal transparent={true} animationType={'none'}>
				<View style={styles.modalBackground}>
					<View style={styles.activityIndicator}>
						<ActivityIndicator size={this.props.size} color={this.props.color} />
					</View>
				</View>
			</Modal>
		);
	}

	defaultStyles() {
		return {
			modalBackground: {
				flex: 1,
				alignItems: 'center',
				justifyContent: 'center',
				backgroundColor: 'transparent',
				opacity: 0.9
			},
			activityIndicator: {
				backgroundColor: '#FFFFFF',
				height: 100,
				width: 100,
				borderRadius: 10,
				alignItems: 'center',
				justifyContent: 'center'
			}
		};
	}
}

Loader.defaultProps = {
	size: 50,
	color: 'black'
};

export default Loader;
