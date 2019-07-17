import React, { Component } from 'react';

class Backend extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
		};
	}

	componentDidMount() {
		fetch('/api/getList')
			.then(res => res.json())
			.then(list => this.setState({ list }));
	}

	render() {
		const { list } = this.state;

		return (
			<div id="backend-component">
				<h1>Backend</h1>
				{list.length ? (
					<div>
						{list.map(item => (
							<div>
								{item}
							</div>
						))}
					</div>
				) : (
					<div>
						<h2>No Backend Found</h2>
					</div>
				)
				}
			</div>
		);
	}
}

export default Backend;
