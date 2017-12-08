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

Hero.prototype.eatFood = function(food) {
  this.health += food.replenishmentValue;
}

module.exports = Hero;
