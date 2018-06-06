function daysUntilXmas (day, month, year) {
	let range = 'января февраля марта апреля мая июня июля августа сентября октября ноября декабря'.split(' ');
	
	day = +day;
	year = +year;
	
	let ans = range.reduce(
	function (carry, val, index) {
		let days = 0;
		if (!(range.indexOf(month) > index)) {
			let x = index + 1;
			
			days = 28 + (x + Math.floor(x/8)) % 2 + 2 % x + 2 * Math.floor(1/x);
			
			if (x == 2) {
				if ((year % 400 === 0) || !(year % 100 === 0) && (year % 4 === 0)) {
					days++;
				};
			};
			
			if (range.indexOf(month) === index) days -= day;
		};
		
		return carry += days;
	}, 0);
	
	return ans = '' + ans;
}

process.stdout.write(daysUntilXmas(process.argv[2], process.argv[3], process.argv[4]));