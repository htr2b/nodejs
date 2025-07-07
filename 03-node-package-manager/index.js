const loadash = require('lodash');

const names = ['alice', 'Bob', 'Charlie', 'David', 'Eve'];
const cNames = loadash.map(names, loadash.capitalize)
const shuffledNames = loadash.shuffle(cNames);

console.log('Original names:', cNames);
console.log('Shuffled names:', shuffledNames);