const _ = require('lodash');

function Hero(name, favoutireFood) {
  this.name = name;
  this.favoutireFood = favoutireFood;
  this.health = 100;
  this.tasks = [];
}

Hero.prototype.talk = function() {
  return "Smithe, not Smith, dear!";
}

module.exports = Hero;
