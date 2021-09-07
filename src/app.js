const { goodOrBad } = require("./utils");
const likeVar = process.argv[2];
const movie = process.argv[3];
const actor = process.argv[4];
const director = process.argv[5];

goodOrBad(likeVar, movie, actor, director);


// const input = process.argv[2];
// console.log(`My favourite move is ${input}`);