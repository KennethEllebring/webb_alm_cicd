const express = require('express');

const router = express.Router();

class Calculator {
  constructor() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }

  add(x, y) {
    this.result = x + y;
    return this.result;
  }

  remove(x, y) {
    this.result = x - y;
    return this.result;
  }

  multiply(x, y) {
    this.result = x * y;
    return this.result;
  }

  divide(x, y) {
    this.result = x / y;
    return this.result;
  }
}

router.get('/', (req, res, next) => {
  res.send('hello');

  module.exports = router;
});
