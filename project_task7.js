// setting my age as 20
const myAge = 20;

// 2 years equals 10.5 years for dog
let earlyYears = 2;

earlyYears *= 10.5;

// As 2 years is already calculated
let laterYears = myAge - 2;

// For each later year incrementing by 4
laterYears *= 4;

// Finding MyAgeInDogYears
let myAgeInDogYears = earlyYears + laterYears;

// printing my name with dog yeras 
let myName = "Ganesh";
myName = myName.toLowerCase();
console.log(`\nMy name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.\n`);
