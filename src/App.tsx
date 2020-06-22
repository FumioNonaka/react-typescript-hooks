import React, { ChangeEvent, useReducer } from 'react';
import reducer, { getBoxCount } from './reducer';
import './App.css';

const layoutArea = {
	width: 500,
	height: 500,
};
const initialBoxSize = 20;
const layoutAreaStyle = {
	width: layoutArea.width,
	height: layoutArea.height,
	overflow: 'hidden',
};
const initialState = {
	boxSize: initialBoxSize,
	boxCount: getBoxCount({width: layoutArea.width, height: layoutArea.height}, initialBoxSize),
};
function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const boxStyle = {
		width: state.boxSize,
		height: state.boxSize,
		boxShadow: 'inset -1px -1px #0275b8',
		opacity: 0.4
	};
	const boxSizeChanged = (event: ChangeEvent) => {
		const numberInput = event.currentTarget as HTMLInputElement;
		const newBoxSize = parseInt(numberInput.value, 10);
		dispatch({ type: 'CHANGE_BOX_SIZE', boxSize: newBoxSize, layoutArea });
	};
	return (
		<div className="App">
			<header className="App-header">
				<input
					type="number"
					min="10"
					max="100"
					// value={boxSize}
					value={state.boxSize}
					onChange={boxSizeChanged}
				/>
			</header>
			<main>
				<div id="layout-area" style={layoutAreaStyle}>
					<div id="grid" style={{ width: layoutArea.width + state.boxSize }}>
						{Array.from(new Array(state.boxCount), (element, id) => (
							<div style={boxStyle} key={id} />
						))}
					</div>
				</div>
			</main>
		</div>
	);
}

export default App;
