const express = require('express');
const path = require('path');
const router = express.Router();
const messages = require('../db/messages');

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Message Board',
    messages: messages
    });
  }
);

module.exports = router;