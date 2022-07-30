const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
                {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
                {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
                {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

let inputNd = document.querySelector("input");
const newStreamers = streamers.filter(function (streamer) {
    if(streamer.name.includes(inputNd)) return streamer.name;
});
console.log(newStreamers);
// let pNd = document.createElement("p");
// pNd.innerHTML = "console.log(newStreamers)";
// inputNd.appendChild(pNd);

// Monday 18/07/22
// Usar addListener + change