'use strict';

const catButton = document.getElementById('make-cat');
catButton.addEventListener('click', function(){
  const newCat = document.createElement("img");
  newCat.src = "cat.jpg"
  const cats = document.getElementById('cats');
  catButton.appendChild(newCat);
});

const dogButton = document.getElementById('make-dog');
dogButton.addEventListener('click', function () {
  const newDog = document.createElement('img');
  newDog.src = "dog.jpeg"
  dogButton.appendChild(newDog);
});

const sheepButton = document.getElementById("make-sheep")
sheepButton.addEventListener("click", function(){
  const newSheep = document.createElement("img");
  newSheep.src = "sheep.jpeg"
    const sheep = document.getElementById("Sheep")
    sheepButton.appendChild(newSheep);
});
const horseButton = document.getElementById("make-horse")
horseButton.addEventListener("click", function(){
    const newHorse = document.createElement("img")
    newHorse.src = "horse.jpeg"
    const horse = document.getElementById("Horse")
    horseButton.appendChild(newHorse);
})
// TODO: create an event listener for the `Make Horse` Button that calls a function named `handleMakingHorse`

// TODO: write a function called `handleMakingHorse that makes a new list item, assigns its text content to `Horse` or the name of a horse you know, and append it to the fourth unordered list.