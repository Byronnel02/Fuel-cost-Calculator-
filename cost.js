// Fuel cost (in rand) = (Distance in km / Efficiency in km/L) × Cost per liter (in rand/L)

"use strict"
let fuelConsumption = document.getElementById("FuelConsumption");
let tripDistance = document.getElementById("TripDistance")

document.getElementById("button").addEventListener("click", function(){
    let selectedFuel = document.getElementById("x").value; 

    let fuelPrice = parseFloat(selectedFuel);

 

  if (fuelConsumption.value === "" || tripDistance.value === "") {document.getElementById("Enter").innerHTML = "Please make sure all boxes have a value";

  } else {
    document.getElementById("Enter").innerHTML = "";
    let fuelCost = (tripDistance.value/100) * fuelConsumption.value * fuelPrice ;
    document.getElementById("fuelCost").innerHTML = `R${fuelCost.toFixed(2)}`;
  }


  
});


// 1. Fuel consumption: 5.5 liters per 100km
// 2. Distance driven per month: 788km
// 3. Fuel consumption per month: 5.5 liters/100km x 788km = 43.34 liters (approximately)
// 4. Fuel price per liter: R23.50 (current price)
// 5. Total fuel cost per month: 43.34 liters x R23.50/liter = R1,019.89









