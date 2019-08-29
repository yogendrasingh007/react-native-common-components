const Reducer = (state, action) => {
	const newState = { ...state };
	switch (action.type) {
		case 'Login':
			return {
				isLogin: false
			};
		default: {
			return newState;
		}
	}
};

export default Reducer;
