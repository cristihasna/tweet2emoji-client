import React, { Component } from 'react';

import Logo from './components/Logo'

export default class App extends Component {
	render() {
		return (
			<header className="header-bar">
				<Logo />
			</header>
		);
	}
}
