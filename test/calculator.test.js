const assert = require('assert');

const Calculator = require('../controllers/calculator');

describe('Calculator test', function () {
  beforeEach(function () {
    this.calc = new Calculator();
  });
  describe('getResult()', function () {
    it('should return 0 when the calculator is created', function () {
      assert.equal(this.calc.getResult(), 0);
    });
  });

  describe('addition', function () {
    it('should return 3 if add 1 + 2', function () {
      assert.equal(this.calc.add(1, 2), 3);
    });
    it('should return -2 if add -1 + -1', function () {
      assert.equal(this.calc.add(-1, -1), -2);
    });
  });

  describe('remove', function () {
    it('should return 1 if 2 - 1', function () {
      assert.equal(this.calc.subtract(2, 1), 1);
    });
  });

  describe('multiply', function () {
    it('should return 6 if add 1 * 2', function () {
      assert.equal(this.calc.multiply(2, 3), 6);
    });
    it('should return -6 if add 2 * -3', function () {
      assert.equal(this.calc.multiply(2, -3), -6);
    });
    it('should return 0 if add 10 * 0', function () {
      assert.equal(this.calc.multiply(10, 0), 0);
    });
  });

  describe('divide', function () {
    it('should return 2 if 6 / 3', function () {
      assert.equal(this.calc.divide(6, 2), 3);
    });
    it('should return 0 if 0 / 10', function () {
      assert.equal(this.calc.divide(10, 0), Infinity);
    });
  });

  describe('power', function () {
    it('should return 4 if 2 ** 2', function () {
      assert.equal(this.calc.power(2, 2), 4);
    });
    it('should return 3125 if 5 ** 5', function () {
      assert.equal(this.calc.power(5, 5), 3125);
    });
  });
});
