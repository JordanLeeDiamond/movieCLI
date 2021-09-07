const fs = require("fs");

const searchFile = () => {
    try {
        return JSON.parse(fs.readFileSync("./storage.json"));
    } catch (error) {
        return [];
    }
};

const saveFile = (listArr) => {
    fs.writeFileSync("./storage.json", JSON.stringify(listArr))
};

exports.addMovie = (movieItem) => {
    const list = searchFile();
    list.push(movieOBJ);
    saveFile(list);
};

exports.listMovie = () => {
    console.log(searchFile());
};

exports.updateMovie = (filter, likeVar) => {
    const list = searchFile();
    let updateIndex;
    list.map((item, index) => {
        if (item.name === filter) {
        updateIndex = index;
    }
    return null;
    });
    if (updateIndex > -1) {
        list[updateIndex].like = likeVar;
        saveFile(list);
    } else{
        console.log("Movie doesn't exist")
    }
};

exports.deleteMovie = (filter) => {
    const list = fs.readFile();
    let deleteIndex;
    list.map((item, index) => {
        if (item.name === filter) {
            deleteIndex = index;
        }
        return null;
    });
    if (deleteIndex > -1) {
        list.splice(deleteIndex, 1);
        saveFile(list);
    } else {
        console.log("Movie doesn't exist")
    }
};

// const addMovie = (likeVar, movie, actor, director) => {
//     const lessStringyList = JSON.parse(fs.readFileSync("./storage.json"));
//     const updatedOBJ = [
//         lessStringyList.flat(),
//         {like: likeVar, movie: movie, actor: actor, dicrector: director},
//     ];
//     fs.writeFileSync("./storage.json", JSON.stringify(updatedOBJ));
// };

// exports.goodOrBad = (likeVar, movie, actor, director) => {
//     if (director) {
//         if (actor) {
//             if (likeVar === "good") {
//                 // console.log(`I think ${movie} directed by ${director} is good with ${actor} starring in it.`)
//                 addMovie(likeVar, movie, actor, director)
//             } else if (likeVar === "bad") {
//                 console.log(`I think ${movie} directed by ${director} is bad with ${actor} starring in it`)
//             } else {
//                 console.log("Incorrect Input")
//             }
//         } 
//     } else if (actor) {
//             if (likeVar === "good") {
//                 console.log(`I think ${movie} is good with ${actor} starring in it.`)
//             } else if (likeVar === "bad") {
//                 console.log(`I think ${movie} is bad with ${actor} starring in it`)
//             } else {
//                 console.log("Incorrect Input")
//             }
//         } else if (likeVar === "good") {
//             console.log(`I think ${movie} is good`)
//         } else if (likeVar === "bad") {
//             console.log(`I think ${movie} is bad`)
//         } else {
//             console.log("Inccorect Input")
//         }
// }


// module.exports = goodOrBad