import React, {useState} from 'react';
import {Text, Box, useInput, useApp, Newline} from 'ink';
import DrawTable from './draw/table.js';

export default function App({name = 'Stranger'}) {
	const [test, setTest] = useState('Press "="');
	/*
	 * 1 2 3 4 5 6 7 8 9 0
	 *
	 * -------------------
	 * x x x x x x x x x x
	 * o o o o o o o o o o
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
			[1, 0],
			[0, 1, 1, 1, 1],
		],
		2: [
			[1, 0],
			[0, 1, 1, 1, 1],
		],
		3: [
			[1, 0],
			[0, 1, 1, 1, 1],
		],
		4: [
			[1, 0],
			[0, 1, 1, 1, 1],
		],
		5: [
			[1, 0],
			[0, 1, 1, 1, 1],
		],
		6: [
			[1, 0],
			[0, 1, 1, 1, 1],
		],
		7: [
			[1, 0],
			[0, 1, 1, 1, 1],
		],
		8: [
			[1, 0],
			[0, 1, 1, 1, 1],
		],
		9: [
			[1, 0],
			[0, 1, 1, 1, 1],
		],
		0: [
			[1, 0],
			[0, 1, 1, 1, 1],
		],
	};
	const [table, setTable] = useState(defaultTable);

	const toggleValue = (digit, i, r) => {
		setTable(prevTable => {
			const newTable = {...prevTable};
			newTable[digit][i][r] = newTable[digit][i][r] === 0 ? 1 : 0;
			return newTable;
		});
	};

	const tablePlusOne = (digit, times) => {
		setTable(prevTable => {
			const newTable = {...prevTable};
			for (var i = 0; i < times; i += 1) {
				let indexZero = newTable[digit][1].indexOf(0);
				if (indexZero < 4) {
					newTable[digit][1][indexZero] = 1;
					newTable[digit][1][indexZero + 1] = 0;
				} else {
					break;
				}
			}
			return newTable;
		});
	};

	const tableMinusOne = (digit, times) => {
		var indexZero = table[digit][1].indexOf(0);
		for (let i = 0; i < times; i++) {
			if (indexZero > 0) {
				toggleValue(digit, 1, indexZero);
				toggleValue(digit, 1, indexZero - 1);
				indexZero -= 1;
			}
		}
	};

	const {exit} = useApp();
	const [topSelector, setTopSelector] = useState(false);
	let topSelectorChars = '1234567890';
	let bottomSelector =
		'1234567890qwertyuiopasdfghjkl;zxcvbnm,./!@#$%^&*()QWERTYUIOPASDFGHJKL:ZXCVBNM<>?';
	let keybinds = {
		digits: {
			'1qaz!QAZ': '1',
			'2wsx@WSX': '2',
			'3edcEDC#': '3',
			'4rfv$RFV': '4',
			'5tgb%TGB': '5',
			'6yhn^YHN': '6',
			'7ujm&UJM': '7',
			'8ik,*IK<': '8',
			'9ol.(OL>': '9',
			'0p;/)P:?': '0',
		},
		times: {
			1234567890: 1,
			qwertyuiop: 2,
			'asdfghjkl;': 3,
			'zxcvbnm,./': 4,
			'!@#$%^&*()': -4,
			QWERTYUIOP: -3,
			'ASDFGHJKL:': -2,
			'ZXCVBNM<>?': -1,
		},
	};

	function countOnes(arr) {
		let count = 0;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] == 0) {
				break;
			}
			count++;
		}
		return count;
	}

	const calcResult = () => {
		var result = 0;
		for (var key in '0987654321') {
			let x = '0987654321'.indexOf(key);
			var i = 10 ** x; // 0>>10**0=1    1>>10**1=10   2>>10**2=100
			if (table[key][0][1] == 1) result += 5 * i;

			let normalNumbers = countOnes(table[key][1]);
			if (normalNumbers > 0) result += normalNumbers * i;
		}
		return result;
	};

	useInput((input, key) => {
		if (key.tab) {
			setTopSelector(!topSelector);
		} else {
			// first row
			if (topSelector === true) {
				if (topSelectorChars.includes(input)) {
					toggleValue(input, 0, 0);
					toggleValue(input, 0, 1);
					setTopSelector(false);
				}
			} else {
				if (bottomSelector.includes(input)) {
					let digitResult = null;
					let timesResult = null;

					// Check for digit mapping
					for (const [keys, value] of Object.entries(keybinds.digits)) {
						if (keys.includes(input)) {
							digitResult = value; // Get the corresponding digit
							break; // Exit loop once found
						}
					}

					// Check for times mapping
					for (const [keys, value] of Object.entries(keybinds.times)) {
						if (keys.includes(input)) {
							timesResult = value; // Get the corresponding times value
							break; // Exit loop once found
						}
					}

					//setTest(`times: ${timesResult}, digitResult: ${digitResult}`);
					if (timesResult > 0) {
						tablePlusOne(digitResult, timesResult);
					} else {
						tableMinusOne(digitResult, Math.abs(timesResult));
					}
				}
			}

			// reset table
			if (input === ' ') setTable(defaultTable);

			if (input === '=') setTest(calcResult());

			// exit
			if (input === '`') exit();
		}
	});

	return (
		<>
			<DrawTable table={table} topSelector={topSelector} />
			<Text>Result: {test}</Text>
			{/*
			<Text>Top Selecotr {topSelector ? 'Active' : 'Deactive'}</Text>
			*/}
		</>
	);
}
