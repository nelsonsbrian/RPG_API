const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const PlayerSchema = new Schema({
  name: String, level: Number,
  inventory: Array,
  gold: Number,
  updated: { type: Date, default: Date.now },
  attributes: {
    health: {
      delta: {
        type: Number,
      },
      base: {
        type: Number
      }
    },
    mana: {
      delta: {
        type: Number,
      },
      base: {
        type: Number
      }
    },
    strength: {
      delta: {
        type: Number,
      },
      base: {
        type: Number
      }
    },
    hitroll: {
      delta: {
        type: Number,
      },
      base: {
        type: Number
      }
    },
    damroll: {
      delta: {
        type: Number,
      },
      base: {
        type: Number
      }
    }
  }
});

PlayerSchema.methods.setDefaults = function() {
  this.level = 1;
  this.attributes.health.base = 100;
  this.attributes.health.delta = 0;
  this.attributes.mana.base = 100;
  this.attributes.mana.delta = 0;
  this.attributes.strength.base = 100;
  this.attributes.strength.delta = 0;
  this.attributes.hitroll.base = 100;
  this.attributes.hitroll.delta = 0;
  this.attributes.damroll.base = 100;
  this.attributes.damroll.delta = 0;
  this.gold = 0;
  this.inventory = [];
  }

module.exports = mongoose.model('Player', PlayerSchema);