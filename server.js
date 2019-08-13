const express = require('express');
const app = express();
const router = express.Router();
const mongoose = require('mongoose');

require('./startup/routes')(app);
require('./startup/db')();

// Test API Call
router.get('/', function (req, res) {
  res.json({ message: 'Send the data down!!' });
});

const port = process.env.PORT || 8080;
app.listen(port, console.log('Magic happens on port ' + port));