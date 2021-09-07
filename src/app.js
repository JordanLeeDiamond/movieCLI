const input = process.argv[2];
const { addMovie, listMovie, updateMovie, deleteMovie } = require("./utils");

const app = () => {
    if (input === "add") {
        const movie = process.argv[3];
        const actor = process.argv[4];
        const likeVar = process.argv[5];
        const newMovie = {
            movie: movie,
            actor: actor,
            like: likeVar,
        };
        addMovie(newMovie);
    } else if (input === "list") {
        listMovie();
    } else if (input === "update") {
        const search = process.argv[3];
        const likeVar = process.argv[4];
        updateMovie(search, likeVar);
    }else if (input === "delete") {
        const search = process.argv[3];
        deleteMovie(search);
    }
};

app();

// const director = process.argv[5];