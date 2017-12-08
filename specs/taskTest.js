var assert = require("assert");
var Task = require("../task.js");

describe("Task", function() {

  var hero1;

  beforeEach("Setup", function() {
    task1 = new Task("easy", "low", 15);
  });

  it("should have difficultyLevel", function() {
  assert.equal(task1.difficultyLevel, "easy");
  });

  it("should have urgencyLevel", function() {
  assert.equal(task1.urgencyLevel, "low");
  });



});

// Create a constructor to create Task objects
//
// A task has a difficulty level
// A task has an urgency level
// A task has a reward
// A task should be able to be marked as completed
