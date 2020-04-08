const assert = require("assert");
const Dinosaur = require("../models/dinosaur.js");

describe("Dinosaur", function () {
  let dinosaur;

  beforeEach(function () {
    dinosaur = new Dinosaur("trex", "carnivor", 50);
  });

  it("should have a species", function () {
    const actual = dinosaur.species;
    assert.strictEqual(actual, "trex");
  });

  it("should have a diet", function () {
    const actual = dinosaur.diet;
    assert.strictEqual(actual, "carnivor");
  });
});
