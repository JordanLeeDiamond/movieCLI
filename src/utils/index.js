const fs = require("fs");

exports.goodOrBad = (likeVar, movie, actor, director) => {
    if (director) {
        if (actor) {
            if (likeVar === "good") {
                console.log(`I think ${movie} directed by ${director} is good with ${actor} starring in it.`)
            } else if (likeVar === "bad") {
                console.log(`I think ${movie} directed by ${director} is bad with ${actor} starring in it`)
            } else {
                console.log("Incorrect Input")
            }
        } 
    } else if (actor) {
            if (likeVar === "good") {
                console.log(`I think ${movie} is good with ${actor} starring in it.`)
            } else if (likeVar === "bad") {
                console.log(`I think ${movie} is bad with ${actor} starring in it`)
            } else {
                console.log("Incorrect Input")
            }
        } else if (likeVar === "good") {
            console.log(`I think ${movie} is good`)
        } else if (likeVar === "bad") {
            console.log(`I think ${movie} is bad`)
        } else {
            console.log("Inccorect Input")
        }
}


// module.exports = goodOrBad