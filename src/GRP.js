import { Images, Theme, Strings } from './res';

/// It's not direct accessible, use methods

let appImages = null;
let appStrings = null;
let appTheme = null;

class GlobalResourceProvider {
	constructor() {
		appImages = Images;
		appStrings = Strings;
		appTheme = Theme;
		return this;
	}

	/// Images
	get images() {
		return appImages;
	}

	updateImages(newImages) {
		appImages = Object.assign({ ...appImages }, newImages);
		console.warn(appImages.welcome);
		return this;
	}

	/// Strings

	get ls() {
		return appStrings;
	}

	updateStrings(newStrings) {
		appStrings = Object.assign({ ...appStrings }, newStrings);
		return this;
	}

	/// theme
	get theme() {
		return appTheme;
	}

	updateTheme(newTheme) {
		appTheme = Object.assign({ ...appTheme }, newTheme);
		return this;
	}
}

const sharedGRP = new GlobalResourceProvider();

export default sharedGRP;
