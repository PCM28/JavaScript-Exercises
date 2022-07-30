const firstDiv = document.querySelectorAll('div'); 
const pNd = document.createElement("p");
pNd.innerHTML = "Voy en medio!";

//Cuando el body está va´cio siempre usar:
//document.body(siempre que esté vacío).insertBefore();
document.body.insertBefore(pNd,firstDiv[1]);//por la posición del segundo div
