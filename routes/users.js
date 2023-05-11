const express = require('express');

const router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.json({ initials: 'AS ES KE NP' });
});

module.exports = router;
