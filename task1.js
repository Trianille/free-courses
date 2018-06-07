function convert (value, fromBase, toBase) {
	return parseInt(value, fromBase).toString(toBase) ;
}

process.stdout.write(convert(process.argv[2], process.argv[3], process.argv[4]));