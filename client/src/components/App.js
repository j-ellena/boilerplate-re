import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import Counter from './Counter';
import RestAPI from './RestAPI';
import Backend from './Backend';
import Page404 from './Page404';

const App = () => (

	<div id="app-component">

		<BrowserRouter>

			<div id="router-div">

				<Nav />
				<Switch>
					<Route
						exact
						path="/"
						component={Home}
					/>
					<Route
						exact
						path="/count"
						component={Counter}
					/>
					<Route
						exact
						path="/rest"
						component={RestAPI}
					/>
					<Route
						exact
						path="/backend"
						component={Backend}
					/>
					<Route component={Page404} />
				</Switch>
			</div>
		</BrowserRouter>

	</div>
);

export default App;
