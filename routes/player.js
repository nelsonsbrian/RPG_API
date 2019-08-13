const mongoose = require('mongoose');
const express = require('express');
const Player = require('../app/models/Player');
const router = express.Router();

router.get('/', async (req, res) => {
  const players = await Player.find().sort('name');
  res.send(players);
});

router.get('/:id', async (req, res) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(404).send('Invalid ID to get.');
  }

  const player = await Player.findById(req.params.id);

  if (!player) return res.status(404).send('The player with the given ID was not found');

  res.send(player);
});

router.post('/create', async (req, res) => {
  
  const error = !req.body.name;
  if (error) return res.status(400).send('Player with no name provided.');

  let user = await Player.findOne({ name: req.body.name });
  if (user) return res.status(400).send('Player name already used.');

  player = new Player();
  player.name = req.body.name;

  player.save();
  res.json({ message: "Player created!", player });
});

router.post('/save', async (req, res) => {
  const player = new Player();
  players.push(player);
  player.name = req.body.name || 'NewPlayer';
  res.json({ message: "Player created!", player });
});

module.exports = router;  