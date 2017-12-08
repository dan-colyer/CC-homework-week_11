var assert = require("assert");
var Food = require("../food.js");

describe("Food", function() {

  var food1;

  beforeEach("Setup", function() {
    food1 = new Food("Apple", 20);
  });

  it("should have name", function() {
  assert.strictEqual(food1.name, "Apple");
  });

  it("should have replenishmentValue", function() {
  assert.strictEqual(food1.replenishmentValue, 20);
  });

});
