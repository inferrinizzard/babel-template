import React from 'react';
import { hot } from 'react-hot-loader';

const App: React.FC = () => (
	<div className="app">
		<h1>Hello World!</h1>
	</div>
);

declare const module: unknown;

export default hot(module)(App);
