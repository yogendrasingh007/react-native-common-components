import { Component } from 'react';
import sharedGRP from '#GRP';

class BaseComponent extends Component {
	constructor(props) {
		super(props);
		this.styles = this.hashMerge(this.defaultStyles(), this.customStyles());
	}

	hashMerge(src, dest) {
		return Object.assign({ ...src }, dest);
	}

	appImages(k) {
		return k ? sharedGRP.images[k] : sharedGRP.images;
	}

	// local strings
	ls(k) {
		return sharedGRP.ls[k];
	}

	/// Stylesheet
	theme() {
		return sharedGRP.theme;
	}

	styleSheet() {
		return this.styles;
	}

	defaultStyles() {
		return null;
	}

	customStyles() {
		return null;
	}
}

export default BaseComponent;
