function combos(word) {
	let o = {};
	let arr = [];
	let fixedChars = [];
	let str = word;
	let varChars;
	let step = 1;
	let charPos = 0;
	(function iterator() {
		arr = [];
		if (step <= word.length && charPos < str.length) {
			if (step === 1) {
				[...str].forEach(c => arr.push(c));
			} else {
				fixedChars = [...str].splice(charPos, step - 1);
				[...str].forEach(c => {
					arr.push(fixedChars, c);
				});
				charPos++;
			}
			o[step] = arr;
			step++;
			iterator();
		}
	})();
	Object.keys(o).forEach(key => console.log((o[key].join(''))));
}
combos('abc')
// combos('abcd')
// combos('abcde')
