const initialState = {
	count: 0,
	isIncrementing: false,
	isDecrementing: false,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INCREASE_COUNT':
			return {
				...state,
				count: state.count + 1,
				isIncrementing: !state.isIncrementing,
			};

		case 'DECREASE_COUNT':
			return {
				...state,
				count: state.count - 1,
				isDecrementing: !state.isDecrementing,
			};

		case 'INCREASE_REQUESTED':
			return {
				...state,
				isIncrementing: true,
			};

		case 'DECREASE_REQUESTED':
			return {
				...state,
				isDecrementing: true,
			};

		default:
			return state;
	}
};

export default reducer;
