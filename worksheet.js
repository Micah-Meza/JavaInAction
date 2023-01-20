"use strict";

//1.Variables

// 1.-Days of the Week

/*let dayOfWeek = 'Monday';

console.log(`The day is ${dayOfWeek}.`);

let dayOfWeek = 'Friday';

console.log(`I can't wait for ${dayOfWeek}!`);

// ************************************************************************************************************

// 2.User Input

/* let animalInput = prompt("What is your favorite animal? ");

let colorInput = prompt("What is your favorite color? ");

console.log(`I've never seen a ${colorInput} ${animalInput}! `);

// ************************************************************************************************************

// 3.Conditionals

// Cinnamon Toast Pancakes, Pizza, Salmon and Mac & Cheese
// 1.-Meals

let timeOfDay = 1400;

let mealOfTheDay = "";

if (timeOfDay < 1200) {
    mealOfTheDay = "Cinnamon Toast Pancakes";
    alert(`${mealOfTheDay} so it's breakfast time! `);
} else if (timeOfDay > 1200 && timeOfDay < 1700) {
    mealOfTheDay = "Pizza";
    alert(`${mealOfTheDay} it's time for Lunch! `);
} else if (timeOfDay > 1700 && timeOfDay < 2300) {
    mealOfTheDay = "Salmon and Mac & Cheese";
    alert(`${mealOfTheDay} dinner time! `);
}


// 2.-Random Number

let randomNum = Math.floor(Math.random() * 11);

if (randomNum <= 2) {
    console.log("Beatles");
} else if (randomNum >= 3 && randomNum <= 5) {
    console.log("Stones");
} else if (randomNum >= 6 && randomNum <= 8) {
    console.log("Floyd");
} else if (randomNum == 9 || randomNum == 10) {
    console.log("Hendrix");
}


// ************************************************************************************************************

//3. Loops

// 1.-For Loop

for(let i = 0; i < 7; i++){
    console.log("Javascript is Cool! ");
}

for(let i = 0; i < 11; i++){
    console.log(i);
}

for(let i = 0; i < 5; i++){
    console.log("Hello! ");
        for(let i = 0; i < 1; i++){
            console.log("Goodbye! ");
    } 
}


// 2.-While Loops
    let i = 1;

    while (i <= 10){
        console.log(`You are ${i} in line. `);
        i++;
    }


// 3. Do-While Loop
    let i = 1;

    do {
        console.log(`The number is ` + i);
        i++;
    }
    while (i < 11);
       

// ************************************************************************************************************

// 4. Functions

// 1.-Favorite Movie(void functions)

function printMovieName(){
    let favoriteMovie = "Resident Evil";
    console.log(favoriteMovie);
}

printMovieName();


// 2.-Favorite Band(return functions)
    
function myFavoriteBand(){
    bandInput = prompt("What is your favorite band? "); 
    return bandInput;
    }
    
    guess = myFavoriteBand();
    console.log(guess);


// 3.-Concert(parameters)

function concertDisplay(musicalAct){
    mystreet = prompt("What street do you live on? ");
    console.log(`It would be great if ${musicalAct} played a show on ${mystreet}!`);
}

concertDisplay("Slipknot");


// ************************************************************************************************************

// 5. Arrays

// 1.-Desktop Items

let desktopItems = ["Speakers", "Soundcard", "Junk", "Monitor"];

console.log(desktopItems[1]);

desktopItems.push("Infinity Gauntlet")

for (let i = 0; i < desktopItems.length; i++){
    console.log(`${i+1}. ${desktopItems[i]}. `);
}

*/


// 2.Magic Number

let magicNumber = Math.floor(Math.random() * 101);
let guess = 0;

while (guess != magicNumber){
    let guess = prompt("Guess between 0 and 100. ");

    if (guess <= magicNumber - 11){
        console.log(`${guess} is too low! `);
    } else if (guess >= magicNumber + 11){
        console.log(`${guess} is too high! `);
    } else if (guess <=  magicNumber - 10 || guess <= magicNumber - 1){
        console.log(`${guess} is getting warmer! `);     
    } else if (guess > magicNumber || guess >= magicNumber + 10){
        console.log(`${guess} is getting warmer! `);  
    } else if (guess == magicNumber){
        console.log(`Congratulations! ${magicNumber} was the magic number. `);
        break;
    }   
}






// ************************************************************************************************************




