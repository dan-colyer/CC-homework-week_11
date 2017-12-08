const _ = require('lodash');

function Task(difficultyLevel, urgencyLevel, reward) {
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.isComplete = false;
}

Task.prototype.completeTask = function() {
  this.isComplete = true;
}

module.exports = Task;
