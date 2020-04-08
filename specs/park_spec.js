const assert = require("assert");
const Park = require("../models/park.js");

describe("Park", function () {
  let park;

  beforeEach(function () {
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
});
