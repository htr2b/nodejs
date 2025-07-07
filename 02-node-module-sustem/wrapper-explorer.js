console.log('Node Module Wrapper Demo');

console.log("filename explorer", __filename);
console.log("dirname explorer", __dirname);
module.exports.greet = function (name) {
    console.log(`Greeting: ${name}`);
}