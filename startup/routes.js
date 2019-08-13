const express = require('express');
const Player = require('../routes/player');

const bodyParser = require('body-parser');

module.exports = function (app) {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use('/api/player', Player);
  
}