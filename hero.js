const _ = require('lodash');

function Hero(name, favoutireFood) {
  this.name = name;
  this.favoutireFood = favoutireFood;
  this.health = 100;
  this.tasks = [];
}

// Record.prototype.prettyPrint = function() {
//   return "Artist: " + this.artist + ", Title: " + this.title + ", Price: " + this.price
// }

module.exports = Hero;
