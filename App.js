/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Platform, StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import { BaseComponent } from '#CommonComponents';
import { Provider } from 'react-redux';

import Test from './Test/Test';

export default class App extends BaseComponent {
	render() {
		const styles = this.styleSheet();
		return (
			<View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
				<Test />
			</View>
		);
	}

	defaultStyles() {
		const { ViewStyles, Colors, Fonts } = this.theme();
		return {
			...ViewStyles,
			textStyle: {
				...Fonts.bold(28),
				color: Colors.Text_Color,
				fontWeight:'normal'
			}
		};
	}
}
