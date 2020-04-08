const Park = function (name, ticketPrice) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
};

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};

Park.prototype.removeDinosaur = function (dinosaur) {
  this.dinosaurs.pop(dinosaur);
};

Park.prototype.mostVisitors = function () {
  let array1;
  for (const dino of this.dinosaurs) {
    array1 = dino.guestsAttractedPerDay;
  }
  return Math.max(array1);
};

module.exports = Park;
