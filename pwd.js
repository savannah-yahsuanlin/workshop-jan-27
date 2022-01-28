
module.exports = function(){
	process.stdin.on('data', (data) => {
		if(data.toString().trim() === 'pwd') {
			const value = process.cwd()
			process.stdout.write('\n' + JSON.stringify(value))
		}
	})
}

