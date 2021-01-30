module.exports = sort = (data, done) => {
    const args = [...data.toString().trim().split(' ')];
    if (args[0] === 'sort') {
        const fs = require('fs');
        fs.readFile(args[1], 'utf8', (err, data) => {
            if (err) {
                done('Something went wrong!');
            } else {
                //sorts the lines
                let fileArr = data.split('\n');
                let sortedFileArr = bubbleSort(fileArr);

                done(sortedFileArr.join('\n'));
            }
        })
    }
}

function bubbleSort(arr){
    let len = arr.length;
    for (let i = len - 1; i >= 0; i--){
      for (var j = 1; j <= i; j++){
        if (arr[j - 1] > arr[j]) {
            let temp = arr[j - 1];
            arr[j - 1] = arr[j];
            arr[j] = temp;
         }
      }
    }
    return arr;
 }