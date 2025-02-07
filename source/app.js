import React, {useState} from 'react';
import {Text, Box, useInput, useApp, Newline} from 'ink';
import DrawTable from './draw/table.js';

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
	let defaultTable = {
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
	};
	const [table, setTable] = useState(defaultTable);
	const toggleValue = (digit, i, c) => {
		setTable(prevTable => {
			const newTable = {...prevTable};
			newTable[digit][i][c] = newTable[digit][i][c] === 0 ? 1 : 0;
			return newTable;
		});
	};

	const {exit} = useApp();
	const [topSelector, setTopSelector] = useState(false);
	let topSelectorChars = '1234567890';

	useInput((input, key) => {
		if (key.tab) {
			setTopSelector(!topSelector);
		} else {
			if (topSelector === true) {
				if (topSelectorChars.includes(input)) {
					toggleValue(input, 0, 0);
					toggleValue(input, 0, 1);
					setTopSelector(false);
				}
			}

			if (input === '`') exit();

			if (input === ' ') setTable(defaultTable);
		}
	});

	return (
		<>
			<Text>Top Selecotr {topSelector ? 'Active' : 'Deactive'}</Text>
			<DrawTable table={table} topSelector={topSelector} />
		</>
	);

	/*
	 *
	 *
<Box width={10}>
	<Box width="50%">
		<Text>X</Text>
	</Box>
	<Text>Y</Text>
</Box>
	 *
	 *
	 *
	 *
	return(<Box>
			<Box alignItems="flex-start">
				<Box marginRight={1}>
					<Text>X</Text>
				</Box>
				<Text>
					A
					<Newline />
					B
					<Newline />C
				</Text>
			</Box>
			<Box alignItems="center">
				<Box marginRight={1}>
					<Text>X</Text>
				</Box>
				<Text>
					A
					<Newline />
					B
					<Newline />C
				</Text>
			</Box>
			<Box alignItems="flex-end">
				<Box marginRight={1}>
					<Text>X</Text>
				</Box>
				<Text>
					A
					<Newline />
					B
					<Newline />C
				</Text>
			</Box>
		</Box>
	);*/
}
