const express = require('express');

const router = express.Router();

const pic = '../public/images/pika.jpg';

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Godly Gamers', pic });
});

module.exports = router;
