const pwd = require('./pwd')
const ls = require('./ls')

const curl = require('./curl')

process.stdout.write('prompt > ')
process.stdin.on('data', (data) => {
	const cmd = data.toString().trim()

	//process.stdout.write('you typed: ' + cmd)
	//process.stdout.write('\n prompt > ')
})


ls()
pwd()
