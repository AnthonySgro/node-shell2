module.exports = tail = (data, done) => {
    const args = [...data.toString().trim().split(' ')];
    if (args[0] === 'tail') {
        const fs = require('fs');
        fs.readFile(args[1], 'utf8', (err, data) => {
            if (err) {
                done('Something went wrong!');
            } else {

                //only prints last 10 lines
                let dataArr = data.split('\n');
                let numFileLines = dataArr.length
                done(dataArr.slice(numFileLines - 10, numFileLines - 1).join('\n'));
            }
        })
    }
}