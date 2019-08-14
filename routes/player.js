const mongoose = require('mongoose');
const express = require('express');
const Player = require('../app/models/Player');
const router = express.Router();

mongoose.set('useFindAndModify', false); // Deprecation warning override

router.get('/', async (req, res) => {
  const players = await Player.find().sort('name');
  res.send(players);
});

router.get('/:id', async (req, res) => {
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
  player.setDefaults();

  player.save();
  res.json({ message: "Player created!", player });
});

router.put('/:id', async (req, res) => {
  const player = await Player.findByIdAndUpdate(req.params.id,
    {
      name: req.body.name,
      level: req.body.level,
      inventory: req.body.inventory
    },
    { new: true });

  if (!player) return res.status(404).send('The player with the given ID was not found');

  res.send(player);
});

router.delete('/:id', async (req, res) => {

  const player = await Player.findByIdAndDelete(req.params.id);

  if (!player) return res.status(404).send('The player with the given ID was not found');

  res.send(player);
});

module.exports = router;  