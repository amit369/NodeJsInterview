const fs = require('fs');

const readerStream = fs.createReadStream('abc.txt');
const writerStream = fs.createWriteStream('bcd.txt');
readerStream.pipe(writerStream);