const express = require('express');

const Calculator = require('../controllers/calculator');

const router = express.Router();

const myCalc = new Calculator();

router.get('/', (req, res, next) => {
  const x = Number(req.query.valOne);
  const y = Number(req.query.valTwo);

  res.render('calculator', {
    val1: x,
    val2: y,
    add: myCalc.add(x, y),
    subtract: myCalc.subtract(x, y),
    multiply: myCalc.multiply(x, y),
    divide: myCalc.divide(x, y),
    power: myCalc.power(x, y),
  });
});

module.exports = router;
