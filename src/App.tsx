import React from 'react';
import './App.css';

const layoutAreaStyle = {
	width: 500,
	height: 400,
	overflow: 'hidden',
};
function App() {
	const boxSize = 20;
	const boxStyle = {
			width: boxSize,
			height: boxSize,
			boxShadow: 'inset -1px -1px #0275b8',
			opacity: 0.4
	};
	const getBoxCount = () => {
			const countX = Math.floor(layoutAreaStyle.width / boxSize) + 1;
			const countY = Math.floor(layoutAreaStyle.height / boxSize) + 1;
			return countX * countY;
	};
	const boxCount = getBoxCount();
	return (
			<div className="App">
					<header className="App-header">
					</header>
					<main>
							<div id="layout-area" style={layoutAreaStyle}>
									<div id="grid" style={{ width: layoutAreaStyle.width + boxSize }}>
											{Array.from(new Array(boxCount), (element, id) => (
													<div style={boxStyle} key={id} />
											))}
									</div>
							</div>
					</main>
			</div>
	);
}

export default App;
