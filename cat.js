module.exports = cat = (data) => {
    const args = [...data.toString().trim().split(' ')];
    if (args[0] === 'cat') {
        const fs = require('fs');
        fs.readFile(args[1], 'utf8', (err, data) => {
            if (err) {
                done('Something went wrong!');
            } else {
                done(data);
            }
        })
    }
}