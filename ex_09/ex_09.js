let weight = 1; 
const volume = 10;
const waterDensity = 1; 
const gravity = 9.81; 
const yellowSquare = document.querySelector('.ex_09 div:last-child');
const weightDisplay = document.querySelector('.ex_09 div:nth-child(2)');
const waterHeight = 800; 
const squareHeight = 50; 
const buoyancyForce = volume * waterDensity * gravity; 
let currentWeight = weight * gravity; 
let netForce = buoyancyForce - currentWeight; 

let newTop = netForce >= 0 
    ? waterHeight - (currentWeight / (waterDensity * gravity)) * (waterHeight / volume)
    : waterHeight - squareHeight;


yellowSquare.style.top = `${Math.max(newTop, waterHeight - squareHeight)}px`;
weightDisplay.textContent = `${weight} kg`;


yellowSquare.addEventListener('click', () => {
    weight++; 
    currentWeight = weight * gravity; 
    netForce = buoyancyForce - currentWeight; 
    newTop = netForce >= 0 
        ? waterHeight - (currentWeight / (waterDensity * gravity)) * (waterHeight / volume)
        : waterHeight - squareHeight;

    yellowSquare.style.top = `${Math.max(newTop, waterHeight - squareHeight)}px`;
    weightDisplay.textContent = `${weight} kg`;
});
