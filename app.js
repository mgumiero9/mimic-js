function combos(word) {
	let obj = {};
	let arr = [];
	let fixedChars = [];
	let str = [...word];
	let varChars;
	let objOrdinary = 0;
	let step = 1;
	let charPos = 0;
	(function iterator() {
		arr = [];
		if (step <= word.length && charPos < str.length) {
			if (step === 1) {
				// str.forEach(c => arr.push(c));
				str.forEach(c => {
					obj[objOrdinary] = c;
					objOrdinary++;
				});
				charPos++
			} else {
				fixedChars = str.splice(charPos, step - 1);
				str.forEach(c => {
					arr.push(fixedChars[0], c);
				});
				obj[objOrdinary] = arr;
				objOrdinary++;
				charPos++;
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
combos('abc')
// combos('abcd')
// combos('abcde')
