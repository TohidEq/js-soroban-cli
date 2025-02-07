import {Text, Box, Newline} from 'ink';

import React, {useState} from 'react';
export default function DrawTable({table, topSelector}) {
	const beadCreator = (beadNumber, lightBg = false) => {
		let bgColor = lightBg ? '#303030' : '#010101';
		if (beadNumber == 0) {
			return (
				<Box height="2">
					<Text color="#dadada" backgroundColor={bgColor}>
						<Text color="#979797">{'⠀⠀▐'}</Text>
						{'▍⠀⠀⠀'}
						<Newline />
						<Text color="#979797">{'⠀⠀▐'}</Text>
						{'▍⠀⠀⠀'}
					</Text>
				</Box>
			);
		} else {
			return (
				<Box marginRight="6" height="2">
					<Text color="#a00000" backgroundColor={bgColor}>
						<Text color="#850000">{'🭈🭆'}</Text>
						{'🬹🬹'}

						<Text color="#a50505">{'🭑🬽⠀'}</Text>

						<Newline />
						<Text color="#700000">{'🭣🭧🬎🬎'}</Text>

						<Text color="#850000">{'🭜🭘⠀'}</Text>
					</Text>
				</Box>
			);
		}
	};

	const miniWall = (space, lightBg = false) => {
		let bgColor = lightBg ? '#303030' : '#010101';
		return (
			<Box flexWrap="wrap" height="2">
				<Text color="#5C4033" backgroundColor={bgColor}>
					{`██${space ? '⠀' : ''}`}
					<Newline />
					{`██${space ? '⠀' : ''}`}
				</Text>
			</Box>
		);
	};
	const bigWall = (
		<Text color="#5C4033">
			███████████████████████████████████████████████████████████████████████████
		</Text>
	);

	const rowCells = (a, b, lightBg = false) => (
		<Box width="128">
			{miniWall(1, lightBg)}
			{beadCreator(table['1'][a][b], lightBg)}
			{beadCreator(table['2'][a][b], lightBg)}
			{beadCreator(table['3'][a][b], lightBg)}
			{beadCreator(table['4'][a][b], lightBg)}
			{beadCreator(table['5'][a][b], lightBg)}
			{beadCreator(table['6'][a][b], lightBg)}
			{beadCreator(table['7'][a][b], lightBg)}
			{beadCreator(table['8'][a][b], lightBg)}
			{beadCreator(table['9'][a][b], lightBg)}
			{beadCreator(table['0'][a][b], lightBg)}
			{miniWall(0, lightBg)}
		</Box>
	);

	return (
		<>
			{bigWall}
			{/* 1 1 row */}
			{rowCells(0, 0, topSelector)}

			{/* 1 2 row */}
			{rowCells(0, 1, topSelector)}

			{bigWall}

			{/* 2 row */}
			{rowCells(1, 0)}
			{/* 3 row */}
			{rowCells(1, 1)}
			{/* 4 row */}
			{rowCells(1, 2)}
			{/* 5 row */}
			{rowCells(1, 3)}

			{/* 6 row */}
			{rowCells(1, 4)}

			{bigWall}
		</>
	);
}
