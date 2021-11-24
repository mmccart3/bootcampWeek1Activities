console.log("Hello everyone");
let a = "hello";
console.log(a);
let mystring = "The quick brown fox jumpes over the lazy dog";
console.log(mystring.startsWith("t"));
console.log(mystring.trimLeft(5));
console.log(Math.random());
let rand = Math.random();
let randtimes10 = (rand*10);
let rand1to10 = Math.floor(randtimes10);
console.log(rand1to10);

//next section
let downline = "   |   |   ";
let crossline ="-----------";
console.log(downline);
console.log(downline);
console.log(downline);
console.log(crossline);
console.log(downline);
console.log(downline);
console.log(downline);
console.log(crossline);
console.log(downline);
console.log(downline);
console.log(downline);

//next section
let testString = "All around the World in 80 days";
let testOutput = testString.charAt(7);
console.log(testOutput);

//next section
let favouriteDrink = "coffee";
console.log("Say something else "+favouriteDrink);
console.log(`My password is ${favouriteDrink}`);

myName = "Mark McCarthy";
myAge = "56";
myFavouriteColor = "Blue";
console.log(`Hello, my name is ${myName}. I am ${myAge} years old and my favourite colour is ${myFavouriteColor}`)

let breakfast = "Sultana Bran";
let lunch = "a chicken sandwich";
let dinner = "poulet basquaise";

console.log(`I had ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for tea`);

breakfast = "toast";
lunch = "a beef sandwich";
dinner = "spag bol";

console.log(`I had ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for tea`);

//Activity 3
console.log("Activity 3")
let myBirthday = new Date(1965, 04, 29);
let today = Date.now();
totalSecondsSince = today - myBirthday;
console.log(totalSecondsSince);
totalDaysSince = Math.floor(totalSecondsSince / 86400000);
console.log(totalDaysSince);

// Activity 4
console.log("Activity 4");
console.log("----------");
console.log("          ");


function drawGrid(){
    gridline0 = `           `;
    gridline1 = `   |   |   `;
    gridline2 = ` ${oxoGrid[0]} | ${oxoGrid[1]} | ${oxoGrid[2]} `;
    gridline3 = `   |   |   `;
    gridline4 = `-----------`;
    gridline5 = `   |   |   `;
    gridline6 = ` ${oxoGrid[3]} | ${oxoGrid[4]} | ${oxoGrid[5]} `;
    gridline7 = `   |   |   `;
    gridline8 = `-----------`;
    gridline9 = `   |   |   `;
    gridline10 = ` ${oxoGrid[6]} | ${oxoGrid[7]} | ${oxoGrid[8]} `;
    gridline11 = `   |   |   `;
    gridline12 = `           `;

    console.log(gridline0);
    console.log(gridline1);
    console.log(gridline2);
    console.log(gridline3);
    console.log(gridline4);
    console.log(gridline5);
    console.log(gridline6);
    console.log(gridline7);
    console.log(gridline8);
    console.log(gridline9);
    console.log(gridline10);
    console.log(gridline11);
    console.log(gridline12);
}

let oxoGrid = [
    "X", "O", "X",
    " ", " ", " ",
    "O", "X", "O",
];

drawGrid();

oxoGrid[4] = "X";
drawGrid();

let music = "cheesey";

if (music == "classical") {
    console.log(`Oh no not ${music}`);
}
else if (music == "rock") {
    console.log(`Oh no not ${music}`);
}
else if (music == "cheesey") {
    console.log(`Oh great I love ${music} music`);
}
else {
    console.log(`What is this?`);
}


// switch example

const grade = 65;

switch(true) {
    case grade >= 70:
        console.log("Distinction");
        break;
    case grade >= 60:
        console.log("Merit");
        break;
    case grade >= 50:
        console.log("Pass");
        break;
     default:
        console.log("Failed");
        break;
    }
// Age activity

let age = 18;
let country = "USA"

if ((age > 17 && country == "UK") || ( age>20 )) {
    console.log("Yes I can serve you");
}
else {
    console.log("You aren't old enough");
}

// Activity Switch Case

let topping = "chorizo";

switch(topping) {
    case "cheese":
    case "ham":
    case "peperoni":
    case "sauasage":
    case "onions":
    case "peppers":
        console.log(`I like ${topping} on my pizza`);
        break;
    case "hot peppers":
    case "chorizo":
        console.log(`${topping} on my pizza gives me indigestion`);
        break;
    default:
        console.log(`I don't like ${topping} on my pizza`);
        break;
}

// Activity Switch Case as a function


function checkTopping(topping){
    switch(topping) {
        case "cheese":
        case "ham":
        case "peperoni":
        case "sauasage":
        case "onions":
        case "peppers":
            console.log(`I like ${topping} on my pizza`);
            break;
        case "hot peppers":
        case "chorizo":
            console.log(`${topping} on my pizza gives me indigestion`);
            break;
        default:
            console.log(`I don't like ${topping} on my pizza`);
            break;
    }
}

checkTopping("cheese");
checkTopping("chorizo");
checkTopping("ham");
checkTopping("pineapple");


// Challenge 1
function passwordCheck(pass){
    if (pass.length < 8) {
        console.log("Password length too short");
            }
        else {
        console.log(`${pass}`);
    }
}

passwordCheck("newpass");
passwordCheck("Newpassword");

// Challenge 2
function checkDivisbility(num){
    if ((num % 3 == 0 ) || (num % 5 == 0 )){
        console.log("This number is divisible by 3 or 5");
    }
    else {
        console.log("This number is not divisible by 3 or 5");
    }
}
checkDivisbility(9);
checkDivisbility(10);
checkDivisbility(11);

// Challenge 3
function fizzBuzz(num){
    if (num % 15 == 0 ){
        console.log("fizz buzz");
    }
    else if (num % 3 == 0 ){
         console.log("fizz");
    }
    else if (num % 5 == 0 ){
        console.log("buzz");
   }
   else {
       console.log(`${num}`)
   } 
}

fizzBuzz(29);
fizzBuzz(30);
fizzBuzz(33);
fizzBuzz(35);

// Challenge 4

function checkPalindrome(num){
    numStr = num.toString();
    arrayNum = numStr.split('');
    reverseNum = arrayNum.reverse();
    reverseString = reverseNum.join('');
    if (num==reverseString){
        console.log(`${num} is a palindrome`);
    } 
    else {
        console.log(`${num} is NOT a palindrome`);
    }
}

checkPalindrome(1001);
checkPalindrome(1000);

let grid = [
    ["o", "|", "o", "|", "o"],
    ["x", "|", "o", "|", "x"],
    ["x", "|", "o", "|", "x"],
    ["_", "_", "_", "_", "_"],
    ["x", "|", "o", "|", "x"],
    ["x", "|", "o", "|", "x"],
    ["x", "|", "o", "|", "x"],
    ["_", "_", "_", "_", "_"],
    ["x", "|", "o", "|", "x"],
    ["x", "|", "o", "|", "x"],
    ["x", "|", "o", "|", "x"],
];
console.log(grid);

if ((grid[0][0] == "x" && grid[0][2] == "x" && grid[0][4] == "x") || (grid[0][0] == "o" && grid[0][2] == "o" && grid[0][4] == "o")){
    console.log("Winner");
} else if ((grid[1][0] == "x" && grid[1][2] == "x" && grid[1][4] == "x") || (grid[1][0] == "o" && grid[1][2] == "o" && grid[1][4] == "o")){
    console.log("Winner");
}


const pressGrindBeans = () => {
    console.log("Grinding for 20 seconds");
}

pressGrindBeans();

let onOff=false;

const pressButton = () => {
    if (onOff){
        console.log("Bool is true");
        onOff = false;
    } else {
        console.log("Bool is false");
        onOff = true;
    }
}

pressButton();
pressButton();
pressButton();



const multiplyByNineFiths = (celsius) => {
    return celsius * (9/5);
};
const getFarhenheit = (celsius) => {
    return multiplyByNineFiths(celsius) +32;
};
console.log("The temperature is "+ getFarhenheit(15) + "°F");

const coffeeOrder = (coffeeSize,coffeeType) => {
    console.log(`Your order is for a ${coffeeSize} ${coffeeType}`);
}

coffeeOrder("Large","Americano");

// Zeller's algorithm

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const zellerDay =(day, month, year) => {
    if (month < 3) {
        month = month + 12;
        year  = year  - 1;
    };

    century = Math.floor(year / 100);
    yearWithinCentury = year - (100*century);
    
    S = Math.floor((2.6 * month) - 5.39) + Math.floor(yearWithinCentury / 4) + Math.floor(century / 4) + day + yearWithinCentury - (2 * century);
    dayOfTheWeek = S - (7 * Math.floor(S / 7));
    return weekday[dayOfTheWeek];
}

console.log(zellerDay(29,04,1965));

//Challenge 6
function lastVowel(str) {
      
    var string = str.toString();
    var vowelPosition = string.length;
    
        for (var i = string.length; i > 0 ; i--) {
  
          if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
            return vowelPosition;
          } else {
            vowelPosition -= 1;
          }
        }
    
  }

console.log(lastVowel("jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"));
console.log(lastVowel("The quick brown fox jumped over the lazy dog"));


//Challenge 7
function firstAndLast(str) {
      
    var string = str.toString();
    
    if (string.charAt(0) == string.charAt(string.length - 1)){
        return true;
    } else {
        return false;
    }
    
  }

console.log(firstAndLast("starts"));
console.log(firstAndLast("finishes"));


//Challenge 8
function even(num1,num2) {
      
    
    if (((num1 + num2) % 2) == 0){
        return (num1 + num2);
    } else {
        return (num1 * num2);
    }
    
  }

console.log(even(3,5));
console.log(even(3,6));


let drinksQuantity = {
    dietCoke: [5, 1],
    cokeZero: [4, 1],
    sprite: [2, 1],
    coke: [0, 1],
    water: [10, 0.75]
}

function drinksAvailable () {
    console.log("diet Coke " + drinksQuantity.dietCoke[0]);
    console.log("Coke Zero " + drinksQuantity.cokeZero[0]);
    console.log("Sprite " + drinksQuantity.sprite[0]);
    console.log("Full Fat Coke " + drinksQuantity.coke[0]);
    console.log("Bottled Water " + drinksQuantity.water[0]);
}


function priceList () {
    console.log("diet Coke £" + drinksQuantity.dietCoke[1]);
    console.log("Coke Zero £" + drinksQuantity.cokeZero[1]);
    console.log("Sprite £" + drinksQuantity.sprite[1]);
    console.log("Full Fat Coke £" + drinksQuantity.coke[1]);
    console.log("Bottled Water £" + drinksQuantity.water[1]);
}


let creditAvail = 1;

function availableToVend(drink,credit){
    if ((drinksQuantity[drink][0] > 0 ) && (credit >= drinksQuantity[drink][1])) {
        console.log("Available to Vend");
    } else {
        console.log("Unable to vend");
    }
        
    
}


drinksAvailable();

priceList();

availableToVend("coke",creditAvail);
availableToVend("sprite",creditAvail);

const person = {
    firstName: "Mark",
    familyName: "McCarthy",
    age: 56,
    drinks: ["tea", "coffee", "beer", "hot chocolate"]
}



let offer = "none";
let time = 1200;
const cafe = {
name: "Whitesheep",
seatingCapacity: 100,
hasSpecialOffers: true,
drinks: ["Cappuccino","Latte","Filter coffee","Tea","Hot chocolate"],
breakfastOffer: "Free croissant with coffee",
lunchOffer: "Free drink with surprisingly priced sandwich",
noOffer: "Sorry no offer",
openCafe:()=>{
    return "Come on in";
    },
closeCafe:()=>{
    return "We are closed, come back tomorrow!"
    }
}

console.log(cafe.openCafe());
console.log(cafe.closeCafe());



const alarm = {
    weekendAlarm: "0700",
    weekdayAlarm: "0600",
}

const day = {
    Monday: ["Weekday", 1 ],
    Tuesday: ["Weekday", 2 ],
    Wednesday: ["Weekday", 3 ],
    Thursday: ["Weekday", 4 ],
    Friday: ["Weekday", 5 ],
    Saturday: ["Weekend", 6 ],
    Sunday: ["Weekend", 7 ],
}

let newToday = "Sunday";
let alarmTime = "0000";

if (day[newToday][0] == "Weekday"){
    alarmTime = alarm.weekdayAlarm;
} else {
    alarmTime = alarm.weekendAlarm;
};

console.log(alarmTime);