function combos(word) {
	let obj = {};
	let arr = [];
	let fixedChars = [];
	let fixedPos = 0;
	let iterations = 0;
	let stepCounter = 0;
	let str = [...word];
	let objOrdinary = 0;
	let step = 1;
	let charPos = 0;
	(function iterator() {
		arr = [];
		if (step <= word.length) {
			if (step === 1) {
				str.forEach(c => {
					obj[objOrdinary] = c;
					objOrdinary++;
				});
				step++;
			} else if (step === 2) {
				stepCounter++;
				str = [...word];
				if (fixedPos < str.length) {
					fixedChars = str.splice(fixedPos, step -1);
				}
				charPos = 0;
				str.forEach(c => {
					arr = [];
					arr.push(fixedChars.join(''), c);
					obj[objOrdinary] = arr;
					objOrdinary++;
					charPos++;
					iterations++
				});
				fixedPos++
				if (stepCounter >= word.length) {
					step++;
					fixedPos = 0;
					stepCounter = 0;
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
							obj[objOrdinary] = arr;
							objOrdinary++;
						})
					}
				});
				step++;
			}
			iterator();
		}
	})();
	Object.keys(obj).forEach(key => {
		if (obj[key] instanceof Array) {
			console.log((obj[key].join('')));
		} else {
			console.log(obj[key]);
		}
	});
}
// combos('abc')
// combos('abcd')
combos('abcde')
// combos('abcdef')
