const assert = require('chai').assert
// const sayHello = require('../app').sayHello
// const addNumbers = require('../app').addNumbers
const app = require('../app')

// results
sayHelloResult = app.sayHello()
addNumbersResult = app.addNumbers(3,3)

describe('App', function() {
  describe('sayHello()', function () {
    it('sayHello should return hello', function() {
      assert.equal(sayHelloResult, 'hello')
    })

    it('sayHello should reurn type string', function() {
      assert.typeOf(sayHelloResult, 'string')
    })
  })

  describe('addNumbers(num1, num2)', function() {
    it('addNumbers should be above 5', function() {
      assert.isAbove(addNumbersResult, 5)
    })

    it('addNumbers should return type number', function() {
      assert.typeOf(addNumbersResult, 'number')
    })
  })

})
