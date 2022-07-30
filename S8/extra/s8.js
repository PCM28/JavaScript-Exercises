const divNd = document.createElement("div");
const baseUrl = `https://ghibliapi.herokuapp.com/films`;
document.body.appendChild(divNd);
createImagenes();

async function createImagenes() {
    const res = await fetch(baseUrl);
    const imagenes = await res.json();
    mostrarImagenes(imagenes);
}

const mostrarImagenes = (imagenes) => {
    for (const imagen of imagenes) {
        const imgNd = document.createElement("img");
        const titleNd = document.createElement("h1");
        imgNd.src=imagen.image;
        titleNd.textContent=imagen.title;
        divNd.appendChild(imgNd);
        divNd.appendChild(titleNd);
    }
}