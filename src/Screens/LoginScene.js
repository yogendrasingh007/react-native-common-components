import React, { PureComponent } from 'react';
import { TouchableOpacity, StatusBar, Text, View, ImageBackground, Image, ActivityIndicator } from 'react-native';
import { BaseComponent, Button } from '#CommonComponents';
import TabBar from '../TabBar';
import { connect } from 'react-redux';

class LoginScene extends BaseComponent {
	constructor(props) {
		super(props);
		this.state = {
			isLogin: this.props.isLogin
		};
	}
	renderExplore(styles) {
		return (
			<TouchableOpacity style={styles.guestButton}>
				<Text style={styles.guestText}>Explore as a guest</Text>
			</TouchableOpacity>
		);
	}
	renderSeparator(styles) {
		return <View style={styles.separator} />;
	}

	renderButtons(styles) {
		return (
			<View style={styles.mainButtons}>
				<Button
					buttonImageText={'LogIn'}
					ImgBackground={this.appImages('buttonBg')}
					style={{ margin: 15, width: 150 }}
					textStyle={{ fontSize: 22 }}
					onPress={() => [this.props.navigation.navigate('TabBar'), this.props.onChange(this.state.isLogin)]}
				/>
				<Button
					buttonImageText={'SignUp'}
					ImgBackground={this.appImages('buttonBg')}
					style={{ margin: 15, width: 150 }}
					textStyle={{ fontSize: 22 }}
				/>
			</View>
		);
	}

	render() {
		const styles = this.styleSheet();
		return (
			<View style={styles.container}>
				<StatusBar translucent={true} backgroundColor={'transparent'} />
				<View style={styles.primaryContainer}></View>
				<View style={styles.secondaryContainer}>
					{this.renderExplore(styles)}
					{this.renderSeparator(styles)}
					{this.renderButtons(styles)}
				</View>
			</View>
		);
	}

	defaultStyles() {
		const { Colors, ViewStyles } = this.theme();
		return {
			container: { flex: 1, position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 },
			primaryContainer: {
				flex: 0.7,
				backgroundColor: 'transparent'
			},
			secondaryContainer: {
				flex: 0.3,
				alignItems: 'center'
			},
			separator: {
				height: 2,
				width: 320,
				backgroundColor: 'grey'
			},
			guestText: {
				fontFamily: 'AvenirNext-Bold',
				fontSize: 30,
				fontWeight: 'bold',
				paddingHorizontal: 5,
				alignSelf: 'center',
				color: 'white',
				textShadowColor: 'white',
				textShadowOffset: { width: 1, height: 1 },
				textShadowRadius: 2
			},
			guestButton: {
				margin: 20
			},
			mainButtons: {
				flexDirection: 'row',
				marginTop: 30
			}
		};
	}
}
const mapStateToProps = state => {
	return { isLogin: state.isLogin };
};

const mapDispatchToProps = dispatch => {
	return {
		onChange: data => dispatch({ type: 'Login', payload: data })
	};
};
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LoginScene);
