module.exports = pwd = (data) => {
    const cmd = data.toString().trim();
    if (cmd === 'pwd') {
        done(process.cwd());
    }
}