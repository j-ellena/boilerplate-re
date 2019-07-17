export const increaseSync = () => (dispatch) => {
	dispatch({
		type: 'INCREASE_REQUESTED',
	});
	dispatch({
		type: 'INCREASE_COUNT',
	});
};

export const decreaseSync = () => (dispatch) => {
	dispatch({
		type: 'DECREASE_REQUESTED',
	});
	dispatch({
		type: 'DECREASE_COUNT',
	});
};

export const increaseAsync = () => (dispatch) => {
	dispatch({
		type: 'INCREASE_REQUESTED',
	});
	return setTimeout(() => {
		dispatch({
			type: 'INCREASE_COUNT',
		});
	}, 3000);
};

export const decreaseAsync = () => (dispatch) => {
	dispatch({
		type: 'DECREASE_REQUESTED',
	});
	return setTimeout(() => {
		dispatch({
			type: 'DECREASE_COUNT',
		});
	}, 3000);
};
