const express = require('express');
const router = express.Router();
const messages = require('../db/messages');

router.get('/', (req, res) => {
  res.render('form');
});

router.post('/', (req, res) => {
  const { author, content } = req.body;
  messages.push({
    text: content,
    user: author,
    added: new Date()
  });
  res.redirect('/');
});

module.exports = router;