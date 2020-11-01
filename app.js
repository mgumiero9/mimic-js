function combos(word) {
	let obj = {};
	let arr = [];
	let fixedChars = [];
	let fixedPos = 0;
	let stepCounter = 0;
	let str = [...word];
	let objOrdinary = 0;
	let step = 1;

	function addRow(c) {
		obj[objOrdinary] = c;
		objOrdinary++;
	}

	(function iterator() {
		arr = [];
		if (step <= word.length) {
			if (step === 1) {
				str.forEach(c => {
					addRow(c);
				});
				step++;
			} else if (step === 2) {
				stepCounter++;
				str = [...word];
				if (fixedPos < str.length) {
					fixedChars = str.splice(fixedPos, step -1);
				}
				str.forEach(c => {
					arr = [];
					arr.push(fixedChars.join(''), c);
					addRow(arr);
				});
				fixedPos++
				if (stepCounter >= word.length) {
					step++;
				}
			} else {
				let lastObjKey = Object.keys(obj).length -1;
				Object.keys(obj).forEach(key => {
					if (obj[key].length === obj[lastObjKey].length) {
						str = [...word];
						obj[key].forEach(c => {
							str = str.filter(value => value !== c);
						});
						[...str].forEach(strChar => {
							arr = [];
							arr.push(...obj[key], strChar);
							addRow(arr);
						})
					}
				});
				step++;
			}
			iterator();
		}
	})();

	(function printValues() {
		Object.keys(obj).forEach(key => {
			if (obj[key] instanceof Array) {
				console.log((obj[key].join('')));
			} else {
				console.log(obj[key]);
			}
		});
	})();
}
// combos('abc')
// combos('abcd')
combos('abcde')
// combos('abcdef')
