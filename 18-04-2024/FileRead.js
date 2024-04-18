const fs = require('fs');

let readerStream= fs.createReadStream('abc.txt');
let writerStream = fs.createWriteStream('abc2.txt');
readerStream.pipe(writerStream);