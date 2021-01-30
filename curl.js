module.exports = cat = (data, done) => {
    const args = [...data.toString().trim().split(' ')];
    if (args[0] === 'curl') {
        const request = require('request');
        request(args[1], (err, resp, body) => {
            if (err) {
                done('Something went wrong!');
            } else {
                done(body);
            }
        });
    }
}

