//? Core
import React, { FunctionComponent } from 'react';
//? Components
import FunctionView from 'components/FunctionView';

interface Properties {
	fns: Array<FunctionGroup>;
}

const FunctionGrid: FunctionComponent<Properties> = ({ fns }) => {
	return (
		<div className="fnGrid">
			{fns.map((group, rowKey) => (
				<div className="fnRow" key={rowKey}>
					{group.fns.map((fn, fnKey) => (
						<FunctionView key={fnKey} input={fn} />
					))}
				</div>
			))}
		</div>
	);
};

export default FunctionGrid;
