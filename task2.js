function daysUntilXmas (day, month, year) {
	let range = 'января февраля марта апреля мая июня июля августа сентября октября ноября декабря'.split(' ');
	
	month = String(range.indexOf(month) + 1);
	
	let date = new Date(year + '-' + month + '-' + day + 'Z');
	let newYear = new Date(year + '-12-31Z');
	
	let ans = newYear - date;
	
	ans /= 24 * 60 * 60 * 1000;
	
	return ans = '' + ans;
}

process.stdout.write(daysUntilXmas(process.argv[2], process.argv[3], process.argv[4]));