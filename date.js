module.exports = date = (data, done) => {
    const cmd = data.toString().trim();
    if (cmd === 'date') {
        let date = new Date();
        
        const DAYSOFWEEK = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
        const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
        
        let dayOfWeek = DAYSOFWEEK[date.getDay()];
        let month = MONTHS[date.getMonth()];
        let dayOfMonth = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let year = date.getFullYear()

        let timeZoneFull = date.toString().match(/\(([A-Za-z\s].*)\)/)[1]
        let timeZoneAbbrv = [];
        timeZoneFull.split(' ').forEach(word => {
            timeZoneAbbrv.push(word[0]);
        })

        //keep double digits
        if (seconds.toString().split('').length === 1) {
            seconds = '0' + seconds;
        }

        if (minutes.toString().split('').length === 1) {
            minutes = '0' + minutes;
        }

        if (hours.toString().split('').length === 1) {
            hours = '0' + hours;
        }

        done(dayOfWeek + ' ' + month + ' ' + dayOfMonth + ' ' + hours + ':' + minutes + ':' + seconds + ' ' + timeZoneAbbrv.join('') + ' ' + year);
    }
}