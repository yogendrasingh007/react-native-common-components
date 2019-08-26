import Redux from './Redux';
import UI from './UI';

import sharedGRP from './GRP';
import Screens from './Screens';
import BootLoader from './BootLoader';
module.exports = {
	...Redux,
	...UI,
	sharedGRP,
	...Screens,
	...BootLoader
};
