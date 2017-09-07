//*************************
// Problem 1:
// Barrels O' RUM

var barrels = function(small, large, total){
  const smallBarrel = 60;
  const largeBarrel = (total - (small * smallBarrel)) / large;
  return largeBarrel;
};

//*************************
// Problem 2:
// Sailing the Seas

var shipFuelCost = function(fuelPrice, milesPerGallon){
    var circumference = 24900;
    //var mpg = milesPerGallon;
  
    var totalGallons = circumference / milesPerGallon;
    var totalCost = totalGallons * fuelPrice;
  
    return totalCost;
  };
  
  console.log(shipFuelCost(3, 12));

//*************************
// Problem 3:
// GROG

var calcFruitJuice = function(galCostco, percCostco, galKirk, percKirk){
  const totalCostco = galCostco * (percCostco / 100);
  const totalKirk = galKirk * (percKirk / 100);
  const juiceTotal = totalCostco + totalKirk;
  const totalPercent = juiceTotal / (galCostco + galKirk)
  console.log(totalPercent)
  return totalPercent;
};

//DO NOT EDIT BELOW THIS LINE//
module.exports = {
  barrels: barrels,
  shipFuelCost: shipFuelCost,
  calcFruitJuice: calcFruitJuice
};
