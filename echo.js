const { builtinModules } = require("module");

module.exports = echo = (data, done) => {
    const args = [...data.toString().trim().split(' ')];
    if (args[0] === 'echo') {
        done(args[1]);
    }
}