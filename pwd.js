
const pwd = function() {
	const value = process.cwd()
	process.stdout.write('\n' + JSON.stringify(value))
}

module.exports = {pwd}

