var assert = require("assert");
var Hero = require("../hero.js");
var Task = require("../task.js");
var Food = require("../food.js");


describe("Hero", function() {

  var hero1;
  var apple;
  var lobster;
  var task1;
  var task2;
  var task3;
  var task4;
  var task5;
  var task6;

  beforeEach("Setup", function() {
    hero1 = new Hero("Mrs Doubtfire", "Lobster");

    apple = new Food("Apple", 20);
    lobster = new Food("Lobster", 5);

    task1 = new Task("easy", "low", 15);
    task2 = new Task("med", "low", 10);
    task3 = new Task("easy", "med", 11);
    task4 = new Task("hard", "med", 55);
    task5 = new Task("hard", "high", 30);
    task6 = new Task("easy", "high", 35);
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

  it("health, should increase by 1.5* if favoutireFood", function() {
    hero1.eatFood(lobster);
    assert.strictEqual(hero1.health, 150);
  });

  it("task can be added to tasks", function() {
    hero1.addTask(task1);
    assert.strictEqual(hero1.tasks.length, 1);
  });

  it("tasks can be sorted by difficulty, urgency or reward", function() {
    hero1.addTask(task1);
    hero1.addTask(task2);
    hero1.addTask(task3);
    hero1.addTask(task4);
    hero1.addTask(task5);
    hero1.addTask(task6);
    hero1.sortTasks();
    assert.strictEqual(hero1.tasks.length, 6);
    // hero1.sortTasks();
    expected = [task1, task2];
    assert.deepStrictEqual(hero1.sortTasks(), expected);
    // assert.deepStrictEqual(hero1.sortTasksBy("difficulty"), "?");

  });

});


// Extend your hero.
//
// A hero should be able to sort their tasks by difficulty, urgency or reward.
// A hero should be able to view tasks that are marked as completed or incomplete.
