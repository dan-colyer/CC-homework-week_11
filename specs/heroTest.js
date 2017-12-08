var assert = require("assert");
var Hero = require("../hero.js");
var Task = require("../task.js");
var Food = require("../food.js");


describe("Hero", function() {

  var hero1;
  var apple;
  var lobster;
  var task1;

  beforeEach("Setup", function() {
    hero1 = new Hero("Mrs Doubtfire", "Lobster");

    apple = new Food("Apple", 20);
    lobster = new Food("Lobster", 5);

    task1 = new Task("easy", "low", 15);
  });

  it("should have name", function() {
    assert.strictEqual(hero1.name, "Mrs Doubtfire");
  });

  it("should have favourite food", function() {
    assert.strictEqual(hero1.favoutireFood, "Lobster");
  });

  it("health should start at 100", function() {
    assert.strictEqual(hero1.health, 100);
  });

  it("tasks should start empty", function() {
    assert.strictEqual(hero1.tasks.length, 0);
  });

  it("can talk, saying their name", function() {
    assert.strictEqual(hero1.talk(), "Smithe, not Smith, dear!");
  });

  it("health, should increase by food replenishmentValue", function() {
    hero1.eatFood(apple);
    assert.strictEqual(hero1.health, 120);
  });

});


// Extend your hero.
//
// A hero should be able to eat food, and health should go up by the replenishment value
// If the food is their favourite food, their health should go up by 1.5 * value.
// A hero should be able to sort their tasks by difficulty, urgency or reward.
// A hero should be able to view tasks that are marked as completed or incomplete.
