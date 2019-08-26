const babelRelativePaths = require('./babelRelativePaths');

module.exports = api => {
	api.cache(true);

	return {
		presets: ['module:metro-react-native-babel-preset'],

		plugins: [
			[
				'babel-plugin-relative-path-import',
				{
					paths: [...babelRelativePaths]
				}
			]
		]
	};
};

// module.exports = {
// 	presets: ['module:metro-react-native-babel-preset']
// };
