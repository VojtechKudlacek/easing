//? Core
import React, { FunctionComponent } from 'react';
//? Components
import FunctionGrid from 'components/FunctionGrid';
//? Utils
import easeFunctions from 'utils/functions';
//? Styles
import 'styles/styles.scss';

const App: FunctionComponent = () => {
	return (
		<main>
			<h1>Easing Functions</h1>
			<FunctionGrid fns={easeFunctions} />
		</main>
	);
};

export default App;
