const assert = require('assert');

const Greeter = require('../controllers/greeting');

describe('Greeter', function () {
  beforeEach(function () {
    this.greet = new Greeter();
  });
  describe('getDefault()', function () {
    it('should return "user" when the Greeter is created', function () {
      assert.equal(this.greet.getDefault(), 'user');
    });
  });
  describe('username', function () {
    it('should return "Hello friend"', function () {
      assert.equal(this.greet.greet('friend'), 'Hello friend');
    });
    it('should return "Hello kenneth"', function () {
      assert.equal(this.greet.greet('kenneth'), 'Hello kenneth');
    });
  });
});
