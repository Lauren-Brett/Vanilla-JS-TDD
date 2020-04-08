const assert = require("assert");
const Park = require("../models/park.js");
const Dinosaur = require("../models/dinosaur.js");

describe("Park", function () {
  let dinosaur1;
  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur("abs", "meateater", 30);
    park = new Park("Gorgie", 10);
  });

  it("should have a name", function () {
    const actual = park.name;
    assert.strictEqual(actual, "Gorgie");
  });

  it("should have a ticket price", function () {
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 10);
  });

  it("should have a collection of dinosaurs", function () {
    const expected = [];
    assert.deepStrictEqual(park.dinosaurs, expected);
  });
});
