module.exports = head = (data, done) => {
    const args = [...data.toString().trim().split(' ')];
    if (args[0] === 'head') {
        const fs = require('fs');
        fs.readFile(args[1], 'utf8', (err, data) => {
            if (err) {
                done('Something went wrong!');
            } else {
                //only prints first 10 lines
                done(data.split('\n').slice(0,10).join('\n'));
            }
        })
    }
}