import React, { Component } from 'react';
import axios from 'axios';
import Data from './Data';

class RestAPI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};

		this.renderData = this.renderData.bind(this);
	}

	async componentDidMount() {
		const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
		this.setState({ data: response.data });
	}

	renderData(data) {
		this.setState({
			data,
		});
	}

	render() {
		const { data } = this.state;
		return (
			<div id="restAPI-component">
				<Data data={data} />
			</div>
		);
	}
}
export default RestAPI;
