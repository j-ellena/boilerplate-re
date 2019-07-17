import React, { Component } from 'react';

class Data extends Component {
	render() {
		const { data } = this.props;
		const dataList = data.map(element => (
			<li key={element.id}>{element.title}</li>));
		return (
			<div id="data-component">
				<h1>Rest API</h1>
				<h2>JSONPlaceholder</h2>
				<h6>Fake Online REST API for Testing and Prototyping</h6>
				{data.length ? (
					<ul className="data-list" key={data.id}>{dataList}</ul>
				) : (
					<div>
						<h2>No data found</h2>
					</div>
				)
				}
			</div>
		);
	}
}
export default Data;
