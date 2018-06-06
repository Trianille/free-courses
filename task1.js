function convert (value, fromBase, toBase) {
	//making array of characters what can be used in numbers
	let alp = 'abcdefghijklmnopqrstuvwxyz';
	let range = '0123456789' + alp + alp.toUpperCase();
	range = range.split('');
	
	//making arrays of characters for each bases
	let fromRange = range.slice(0, fromBase);
	let toRange = range.slice(0, toBase);
	
	//calculating decimal value from argument
	let dec = value.split('').reverse().reduce(
	function (carry, digit, index) {
		//throw error if digit have unpropper char
		if (fromRange.indexOf(digit) === -1) throw new Error (digit + ' are not belong this base');
		return carry += fromRange.indexOf(digit) * (Math.pow(fromBase, index))
	}, 0);
	
	//calculating answer
	let ans = '';
	while (dec > 0) {
		ans = toRange[dec % toBase] + ans;
		dec = (dec - (dec % toBase)) / toBase;
	}
	
	return ans;
}

process.stdout.write(convert(process.argv[2], process.argv[3], process.argv[4]));