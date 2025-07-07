const { log } = require('console');
const path = require('path');

console.log('Directory name:', path.dirname(__filename));
console.log('File name:', path.basename(__filename));
console.log('File extension:', path.extname(__filename));


const joinedPath = path.join('user', 'subdir', 'file.txt');
console.log('Joined path:', joinedPath);
const resolvedPath = path.resolve('user', 'subdir', 'file.txt');
console.log('Resolved path:', resolvedPath);

const normalizedPath = path.normalize('/user//subdir/../file.txt');
console.log('Normalized path:', normalizedPath);