type GridState = {
	boxSize: number,
	boxCount: number,
};
type GridAction = {
	type: string,
	boxSize: number,
	layoutArea: {
		width: number,
		height: number,
	},
};

const reducer = (state: GridState, action: GridAction) => {
	switch (action.type) {
		case 'CHANGE_BOX_SIZE':
			const boxSize = action.boxSize;
			const layoutArea = action.layoutArea;
			const boxCount = getBoxCount(layoutArea, boxSize);
			return {boxSize, boxCount};
		default:
			return state;
	}
};
export function getBoxCount(layoutArea: GridAction['layoutArea'], boxSize: number) {
	const countX = Math.floor(layoutArea.width / boxSize) + 1;
	const countY = Math.floor(layoutArea.height / boxSize) + 1;
	return countX * countY;
};

export default reducer;
