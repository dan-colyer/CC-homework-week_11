const _ = require('lodash');

function Food(name, replenishmentValue) {
  this.name = name;
  this.replenishmentValue = replenishmentValue;
}

// Food.prototype.completeTask = function() {
//   this.isComplete = true;
// }

module.exports = Food;
