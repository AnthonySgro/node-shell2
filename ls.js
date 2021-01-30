module.exports = ls = (data, done) => {
    const cmd = data.toString().trim();
    if (cmd === 'ls') {
        const fs = require('fs');
        fs.readdir('/.', 'utf8', (err, files) => {
            if (err) {
                done('Something went wrong!');
            } else {
                done(files.join('\n'));
            }
        })
    }
}