import { Platform } from 'react-native';
const Fonts = {
	medium: (s = 12) => {
		return {
			fontSize: s,
			...Platform.select({
				android: {
					fontWeight: '200'
				},
				ios: {
					fontFamily: 'roboto',
					fontWeight: '300'
				}
			})
		};
	},
	regular: (s = 12) => {
		return {
			fontSize: s
		};
	},
	bold: (s = 12) => {
		return {
			fontSize: s,
			fontWeight: 'bold'
		};
	},
	light: (s = 12) => {
		return {
			fontWeight: 'normal',
			fontSize: s
		};
	}
};

module.exports = {
	...Fonts
};
