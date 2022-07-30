const smallMovie = [];
const mediumMovie = [];
const bigMovie = [];
//Variables siempre se ponen como primero
const movies = [{name: "Your Name", durationInMinutes: 130},{name: "Pesadilla antes de navidad", durationInMinutes: 225}, {name: "Origen", durationInMinutes: 165}, {name: "El señor de los anillos", durationInMinutes: 967}, {name: "Solo en casa", durationInMinutes: 214}, {name: "El jardin de las palabras", durationInMinutes: 40}];
for (let i = 0; i < movies.length; i++) {
    (movies[i].durationInMinutes>200) ? bigMovie.push(movies[i].durationInMinutes) : (movies[i].durationInMinutes > 100 ? mediumMovie.push(movies[i].durationInMinutes) : smallMovie.push(movies[i].durationInMinutes));   
}
// console.log(smallMovie);
// console.log(mediumMovie);
// console.log(bigMovie);
//Integrar los 3 no por separado
console.log(smallMovie, mediumMovie, bigMovie);