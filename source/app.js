import React, {useState} from 'react';
import {Text, Box, useInput, useApp} from 'ink';

export default function App({name = 'Stranger'}) {
	const [x, setX] = React.useState(1);
	const [y, setY] = React.useState(1);
	/*
	 * 1 2 3 4 5 6 7 8 9 0
	 *
	 * -------------------
	 * o o o o o o o o o o
	 * x x x x x x x x x x
	 * -------------------
	 * o o o o o o o o o o
	 * x x x x x x x x x x
	 * x x x x x x x x x x
	 * x x x x x x x x x x
	 * x x x x x x x x x x
	 *
	 * */
	const [table, setTable] = useState({
		1: [
			[0, 1],
			[0, 1, 1, 1, 1],
		],
		2: [
			[0, 1],
			[0, 1, 1, 1, 1],
		],
		3: [
			[0, 1],
			[0, 1, 1, 1, 1],
		],
		4: [
			[0, 1],
			[0, 1, 1, 1, 1],
		],
		5: [
			[0, 1],
			[0, 1, 1, 1, 1],
		],
		6: [
			[0, 1],
			[0, 1, 1, 1, 1],
		],
		7: [
			[0, 1],
			[0, 1, 1, 1, 1],
		],
		8: [
			[0, 1],
			[0, 1, 1, 1, 1],
		],
		9: [
			[0, 1],
			[0, 1, 1, 1, 1],
		],
		0: [
			[0, 1],
			[0, 1, 1, 1, 1],
		],
	});

	const {exit} = useApp();
	useInput((input, key) => {
		if (input === 'q') {
			exit();
		}

		if (key.leftArrow) {
			setX(Math.max(1, x - 1));
		}

		if (key.rightArrow) {
			setX(Math.min(20, x + 1));
		}

		if (key.upArrow) {
			setY(Math.max(1, y - 1));
		}

		if (key.downArrow) {
			setY(Math.min(10, y + 1));
		}
	});
	return (
		<Box flexDirection="column">
			<Text>Use arrow keys to move the face. Press “q” to exit.</Text>
			<Box height={20} paddingLeft={x} paddingTop={y}>
				<Text>^_^</Text>
			</Box>
		</Box>
	);
}
