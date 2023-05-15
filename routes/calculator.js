const express = require('express');

const Calculator = require('../controllers/calculator');

const router = express.Router();

router.get('/', Calculator, (req, res, next) => {
  res.send('Add calculator');

  module.exports = router;
});
