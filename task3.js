function timeGapsSum (t1, t2) {
	//String.prototype.timeToReadible = function() {}
	let sum = Number(t1) + Number(t2);
	let ans = '';
	
	let hours = Math.floor(sum / 3600);
	let minutes = Math.floor(sum % 3600 / 60);
	let seconds = Math.floor(sum % 3600 % 60);
	
	let reg0 = RegExp('^0$');
	let reg1 = RegExp('^1$|[2-9]1$');
	let reg2 = RegExp('^[2-4]$|[2-9][2-4]$');
	
	let hoursDisplay = reg0.test(hours) ? '' : hours + (reg1.test(hours) ? ' час ' : (reg2.test(hours) ? ' часа ' : ' часов '));
	let minutesDisplay = reg0.test(minutes) ? '' : minutes + (reg1.test(minutes) ? ' минута ' : (reg2.test(minutes) ? ' минуты ' : ' минут '));
	let secondsDisplay = reg0.test(seconds) ? '' : seconds + (reg1.test(seconds) ? ' секунда ' : (reg2.test(seconds) ? ' секунды ' : ' секунд '));
	
	return ans = hoursDisplay + minutesDisplay + secondsDisplay;
}
process.stdout.write(timeGapsSum(process.argv[2], process.argv[3]));