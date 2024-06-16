import peliculas from './peliculas.js'

const actionOne = document.getElementById("actionOne");
const thrillerOne = document.getElementById("thrillerOne");
const adventureOne = document.getElementById("adventureOne");

const generoContainer = document.querySelectorAll(".genero-container");

console.log(generoContainer[0]);
console.log(generoContainer[1]);
console.log(generoContainer[2]);

const genero28 = document.getElementById("genero-28");
const genero53 = document.getElementById("genero-53");
const genero12 = document.getElementById("genero-12");

console.log(genero28);
console.log(genero53);
console.log(genero12);

const genreAction = peliculas.filter((element) => element.genre_ids.includes(28));
const genreThriller = peliculas.filter((element) => element.genre_ids.includes(53));
const genreAdventure = peliculas.filter((element) => element.genre_ids.includes(12));


const genero = {
    obtenerGenre: () => genreAdventure
}
console.log(genero)




/* PRUEBAS

const genreAction = peliculas.filter((element) => element.genre_ids.includes(28));
const genreThriller = peliculas.filter((element) => element.genre_ids.includes(53));
const genreAdventure = peliculas.filter((element) => element.genre_ids.includes(12));


//const genero = document.querySelectorAll('genre_ids');

const genero28 = document.getElementById("genero-28");
const genero53 = document.getElementById("genero-53");
const genero12 = document.getElementById("genero-12");


const genreAction = 28;
const genreThriller = 53;
const genreAdventur = 12;


const genreAction = peliculas.filter((element) => element.genre_ids.includes(28));
const genreThriller = peliculas.filter((element) => element.genre_ids.includes(53));
const genreAdventure = peliculas.filter((element) => element.genre_ids.includes(12));




console.log(genreAction);
console.log(genreThriller);
console.log(genreAction);



function obtenerGenero (a, b) {
    
    return a + b
}
console.log()


const genero = {
    obtenerGenre:() => genreAdventure
}

console.log(genero.obtenerGenre())


actionOne.addEventListener('click' function() {

})
*/