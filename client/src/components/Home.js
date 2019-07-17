import React from 'react';
import logoRedux from '../assets/logo-redux.png';
import logoRouter from '../assets/logo-router.png';
import logoExpress from '../assets/logo-express.png';
import logoAxios from '../assets/logo-axios.png';

const Home = () => (
	<div id="home-component">
		<h1>My boilerplate</h1>
		<h2>React</h2>
		<h3>+</h3>
		<div className="flex-row">
			<div id="router-logo">
				<img alt="router-logo" src={logoRouter} />
			</div>
			<div id="redux-logo">
				<img alt="redux-logo" src={logoRedux} />
			</div>
		</div>
		<h3>+</h3>
		<div className="flex-row">
			<div id="express-logo">
				<img alt="express-logo" src={logoExpress} />
			</div>
			<div id="axios-logo">
				<img alt="axios-logo" src={logoAxios} />
			</div>
		</div>
	</div>
);

export default Home;
