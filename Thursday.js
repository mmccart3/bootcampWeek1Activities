function index(num1,num2){
    return (num1 ** num2)
}

console.log(index(2,6));


let myArray = [ "Matthew", "Mark", "Luke", "John"];

console.log(myArray);
myArray.push("Acts");
console.log(myArray);
myArray.pop(2);
console.log(myArray);

let multiplesTwo = [];

for(let i=100; i>=0; i--){
    if (i % 2 == 0){
        multiplesTwo.push(i);
    }
}

console.log(`Numbers divisble by 2 between 100 and 0 ${multiplesTwo}`);

console.log(2/0);

let myFavFilms = ["The Longest Day","The Shawshank Redemption","Casablanca","The Deathly Hallows Part 1","It's a Wonderful Life"];
myFavFilms.push("Deathly Hallows Part 2");
myFavFilms.push("Ther is something about Mary");

for (let i=0; i<myFavFilms.length; i++){
    console.log(myFavFilms[i]);
}

for(let i = 0; i < 6; i++){
    console.log(Math.floor(Math.random() * 49 + 1));
    };

for(let i = 9; i > -1; i--){
    console.log(i);
    };

let yourFavFilms = ["The Longest Day","The Shawshank Redemption","Ghostbusters","It's a Wonderful Life"];

for (let i=0; i<yourFavFilms.length; i++){
    console.log(yourFavFilms[i]);
}

function filmCheck(filmArray){
    if (filmArray[2] == "Ghostbusters") {
        return "yey it’s ghostbusters";
    } else {
        return "booo, we want ghostbusters";
    }
}
console.log(filmCheck(yourFavFilms));

// Activity 5

for(let i = 0; i < 6; i++){
    let num1 = Math.floor(Math.random() * 29 + 1);
    if ((num1 % 7) == 0) {
        myText = " divisble by 7";
    } else {
        myText = "  NOT divisble by 7";
    }

    console.log(num1+ myText);
    };

// Activity 7
listOfPrimes [2]

function findPrimes(maxNum){
    for( let i=2 ; i)
}

for (let i=0; i<myFavFilms.length; i++){
    console.log(myFavFilms[i]);