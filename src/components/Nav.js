import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-react.svg';

const Nav = () => (
	<div id="nav-component">
		<header>

			<Link to="/">
				<button type="button">
					<img id="logo" src={logo} alt="logo-react" />
				</button>
			</Link>

			<Link to="/count">
				<button type="button">
                        iCount
				</button>
			</Link>

		</header>
	</div>
);

export default Nav;
