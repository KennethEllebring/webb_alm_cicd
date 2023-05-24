const express = require('express');

const Greeter = require('../controllers/greeting');

const router = express.Router();

const myGreet = new Greeter();

router.get('/', (req, res, next) => {
  const name = req.query.username;
  const noUsername = 'user';

  res.render('greeter', {
    noUser: noUsername,
    greet: myGreet.greet(name),
  });
});

module.exports = router;
