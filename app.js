function combos(word) {
	let obj = {};
	let arr = [];
	let fixedChars = [];
	let fixedPos = 0;
	let iterations = 0;
	let str = [...word];
	let varChars;
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
			} else {
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
				if (iterations >= obj[objOrdinary -1].length * word.length) {
					step++;
					fixedPos = 0;
				}
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
combos('abc')
// combos('abcd')
// combos('abcde')
