// Starting us off
process.stdout.write('prompt > ');

// List of command functions
const pwd = require('./pwd')
const cat = require('./cat');
const curl = require('./curl');
const ls = require('./ls');
const date = require('./date');
const echo = require('./echo');
const head = require('./head');
const tail = require('./tail');
const sort = require('./sort');
const wc = require('./wc');
const uniq = require('./uniq');


// The stdin 'data' event fires after a 
// user types in a new line
process.stdin.on('data', (data) => {
    
    //remove repetition
    const done = (output) => {
        process.stdout.write(`${output}\n`);
        process.stdout.write('prompt > ');
    }

    //available modules
    pwd(data, done);
    ls(data, done);
    cat(data, done);
    curl(data, done);
    date(data, done);
    echo(data, done);
    head(data, done);
    tail(data, done);
    sort(data, done);
    wc(data, done);
    uniq(data, done);
});