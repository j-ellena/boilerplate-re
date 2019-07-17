import React, { Component } from 'react';

class RestAPI extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
		};
	}

	async componentDidMount() {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos');
		const json = await response.json();
		this.setState({ data: json });
	}

	// componentDidMount() {
	// 	fetch('https://jsonplaceholder.typicode.com/todos')
	// 		.then(response => response.json())
	// 		.then(dataJSON => this.setState({
	// 			data: dataJSON,
	// 		}));
	// }

	render() {
		const { data } = this.state;
		console.log(JSON.stringify(data));
		const myData = data.map(element => (
			<li key={element.id}>{element.title}</li>
		));
		return (

			<div id="restAPI-component">
				<h1>Rest API</h1>
				<h2>JSONPlaceholder</h2>
				<h6>Fake Online REST API for Testing and Prototyping</h6>
				<ul id="data-list" key={data.id}>{myData}</ul>
			</div>
		);
	}
}
export default RestAPI;
