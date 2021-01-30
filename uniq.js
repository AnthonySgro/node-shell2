module.exports = uniq = (data, done) => {
    const args = [...data.toString().trim().split(' ')];
    if (args[0] === 'uniq') {
        const fs = require('fs');
        fs.readFile(args[1], 'utf8', (err, data) => {
            if (err) {
                done(err)
            } else {
                let fileLines = data.split('\n');
                let uniqueFileLines = Array.from(new Set(fileLines));
                //hi
                //hi
                done(uniqueFileLines.join(`\n`));
            }
        })
    }
}