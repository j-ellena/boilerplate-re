import React from 'react';
import { connect } from 'react-redux';
import {
	increaseSync,
	decreaseSync,
	increaseAsync,
	decreaseAsync,
} from '../actions/actions';

const mapStateToProps = state => ({
	count: state.count,
	isIncrementing: state.isIncrementing,
	isDecrementing: state.isDecrementing,
});

const mapDispatchToProps = dispatch => ({
	onIncrementSync: () => { dispatch(increaseSync()); },
	onDecrementSync: () => { dispatch(decreaseSync()); },
	onIncrementAsync: () => { dispatch(increaseAsync()); },
	onDecrementAsync: () => { dispatch(decreaseAsync()); },
});

const Counter = (props) => {
	const {
		count,
		isIncrementing,
		isDecrementing,
		onIncrementSync,
		onDecrementSync,
		onIncrementAsync,
		onDecrementAsync,
	} = props;

	return (
		<div id="counter-component">
			<h1>Counter</h1>

			<div className="flex-row">
				<div className="flex-col">
					<button onClick={onIncrementSync} type="button">increment sync</button>
					<button onClick={onDecrementSync} type="button">decrement sync</button>
				</div>
				<h3>{count}</h3>
				<div className="flex-col">
					<button onClick={onIncrementAsync} disabled={isIncrementing} type="button">increment async</button>
					<button onClick={onDecrementAsync} disabled={isDecrementing} type="button">decrement async</button>
				</div>
			</div>
		</div>

	);
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
