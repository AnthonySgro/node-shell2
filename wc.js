module.exports = wc = (data, done) => {
    const args = [...data.toString().trim().split(' ')];
    if (args[0] === 'wc') {
        const fs = require('fs');
        fs.readFile(args[1], 'utf8', (err, data) => {
            if (err) {
                done(err)
            } else {
                let newLines = data.split('\n').length;
                let words = data.split(/\W+/).length;
                let bytes = data.split('').length;
                done(`New Lines: ${newLines}, Words: ${words}, Bytes: ${bytes}`)
            }
        })
    }
}