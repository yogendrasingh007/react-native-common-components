import { Component, Children } from 'react';
import sharedGRP from '../GRP';

class InternsProvider extends Component {
	constructor(props) {
		super(props);
		this.bootLoading();
	}

	bootLoading() {
		sharedGRP
			.updateImages(this.props.images)
			.updateStrings(this.props.strings)
			.updateTheme(this.props.theme);
	}

	render = () => {
		return Children.only(this.props.children);
	};
}

export default InternsProvider;
