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
  if (this.favoutireFood === food.name) {
    this.health *= 1.5;
  } else {
    this.health += food.replenishmentValue;
  }
}

Hero.prototype.addTask = function(task) {
  this.tasks.push(task);
}

Hero.prototype.sortTasksBy = function(sortBy) {
  let newArray = [];
  for(task of this.tasks) {
    newArray.push(task);
  }
  return newArray;
}



module.exports = Hero;

// var items = [
//   { name: 'Edward', value: 21 },
//   { name: 'Sharpe', value: 37 },
//   { name: 'And', value: 45 },
//   { name: 'The', value: -12 },
//   { name: 'Magnetic', value: 13 },
//   { name: 'Zeros', value: 37 }
// ];
//
// // sort by value
// items.sort(function (a, b) {
//   return a.value - b.value;
// });
