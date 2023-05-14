const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  let startLocations = this.journeys.map((journey)=>{return journey.startLocation})
  return startLocations
};

Traveller.prototype.getJourneyEndLocations = function () {
  let endLocations = this.journeys.map((journey)=>{return journey.endLocation})
  return endLocations
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  let journeysByTransport = this.journeys.filter((journey)=>{return journey.transport === transport})
  return journeysByTransport
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  let journeysByDistance = this.journeys.filter((journey)=>{return journey.distance > minDistance})
  return journeysByDistance
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  let totalDistance = this.journeys.map((journey)=>journey.distance).reduce((accumulator,currentValue)=> { return accumulator 
    += currentValue});
  return totalDistance
};

Traveller.prototype.getUniqueModesOfTransport = function () {
let allTransports = this.journeys.map(journey => journey.transport)
const uniqueTransports = new Set(allTransports)
let uniqueTransportsArray = []

for (element of uniqueTransports){
  uniqueTransportsArray.push(element)
}
return uniqueTransportsArray
};



module.exports = Traveller;
