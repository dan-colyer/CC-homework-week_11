var assert = require("assert");
var Hero = require("../hero.js");

describe("Hero", function() {

  var hero1;

  beforeEach("Setup", function() {
    hero1 = new Hero("Mrs Doubtfire", "Lobster");
  });

  it("should have name", function() {
  assert.equal(hero1.name, "Mrs Doubtfire");
  });

  it("should have favourite food", function() {
  assert.equal(hero1.favoutireFood, "Lobster");
  });

  it("health should start at 100", function() {
  assert.equal(hero1.health, 100);
  });

  it("tasks should start empty", function() {
  assert.equal(hero1.tasks.length, 0);
  });

  it("can talk, saying their name", function() {
  assert.equal(hero1.talk(), "Smithe, not Smith, dear!");
  });

});
