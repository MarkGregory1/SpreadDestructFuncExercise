// 1a
var jPDinos = [
    "Velociraptors",
    "Tyrannosaurus Rex",
    "Dilophosaurus"
];

console.log(`===============================`);

// 1b
function seeDinos(i, ...j){
    console.log(i);       
    console.log(j);       
};
seeDinos(...jPDinos)
// OR
// seeDinos(`Velociraptors`, `Tyrannosaurus Rex`, `Dilophosaurus`);

console.log(`===============================`);

// 2a
const jPCharacters = {
    alanGrant: "Sam Neill",
    ellieSattler: "Laura Dern",
    ianMalcolm: "Jeff Goldblum"
};

console.log(`===============================`);

// 2b
seeCharacters = ({ellieSattler}) => {
    console.log(ellieSattler);
}
seeCharacters(jPCharacters);

console.log(`===============================`);

// BONUS
// 3a
const jurassicParkMovies = [
    {
        one: "Jurassic Park", 
        two: "The Lost World: Jurassic Park", 
        three: "Jurassic Park III"
    },
    {
        four: "Jurassic World", 
        five: "Jurassic World: Fallen Kingdom", 
        six: "Jurassic World: Dominion"
    }
];

console.log(`===============================`);

// 3b
// const [{one, two, three}, {four, five, six}] = jurassicParkMovies;
// const allMovies = [one, two, three, four, five, six];
// seeJPMovies = y => {
//     console.log(one);
//     console.log(two);
//     console.log(three);
//     console.log(four);
//     console.log(five);
//     console.log(six);
// }

// seeJPMovies(allMovies)
// OR
// function seeJPMovies([{one, two, three}, {four, five, six}]){
//     console.log(one);
//     console.log(two);
//     console.log(three);
//     console.log(four);
//     console.log(five);
//     console.log(six);
// }

// seeJPMovies(jurassicParkMovies);
// OR
seeJPMovies = ({one, two, three}, {four, five, six}) => {
    console.log(one);
    console.log(two);
    console.log(three);
    console.log(four);
    console.log(five);
    console.log(six);
}

seeJPMovies(...jurassicParkMovies);