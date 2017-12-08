var assert = require("assert");
var Food = require("../food.js");

describe("Food", function() {

  var hero1;

  beforeEach("Setup", function() {
    food1 = new Food("Apple", 20);
  });

  it("should have name", function() {
  assert.strictEqual(food1.name, "Apple");
  });

});






// Create a constructor to create Food objects.
//
// Food should have a name
// Food should have a replenishment value
