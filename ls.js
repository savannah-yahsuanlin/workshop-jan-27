const fs = require('fs')

module.exports = function(){
	process.stdin.on('data', (data) => {
		if(data.toString().trim() === 'ls') {
			fs.readdir('./', 'utf-8', (err, files) =>{
				if(err) {
					console.log(err)
				} else {
					process.stdout.write(files.join('\n'))
					process.stdout.write("\n prompt > ")
				}
			})
		} 
	})
}
