const fs = require('fs');

console.time('math1-no-io');
const dataToSave = 50*100*300;
console.timeEnd('math1-no-io');

console.time('filesave-io');
fs.appendFileSync('file.txt')
console.timeEnd('filesave-io');