/*
module.exports = function () {
  return 'hello1'
}
*/

// run with 'npm run test'
// 'npm run test -s' to not show errors
// or "test": "mocha || true" in package.json

module.exports = {
  sayHello: function() {
    return 'hello'
  },
  addNumbers: function(value1, value2) {
    return value1 + value2
  }
}
