import React from 'react';
import { StyleSheet, View, Modal, ActivityIndicator } from 'react-native';
import Spinner from 'react-native-spinkit';

const Loader = props => {
	const { loading } = props;

	return (
		<Modal transparent={true} animationType={'none'} visible={loading}>
			<View style={styles.modalBackground}>
				<View style={styles.activityIndicator}>
					<Spinner isVisible={true} size={70} type={props.style} color={'black'} />
				</View>
			</View>
		</Modal>
	);
};

const styles = StyleSheet.create({
	modalBackground: {
		flex: 1,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'space-around',
		backgroundColor: 'transparent',
		opacity: 0.9
	},
	activityIndicator: {
		backgroundColor: '#FFFFFF',
		height: 120,
		width: 120,
		borderRadius: 10,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-around'
	}
});

export default Loader;
