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

});



// A. Create a constructor to create a Hero character
//
// A Hero has a name
// A Hero has health
// A Hero has a favourite food
// A Hero can talk saying their name
// A Hero has a collection of tasks to complete
