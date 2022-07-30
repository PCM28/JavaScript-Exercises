const baseUrl = 'http://localhost:3000/planets';
fetch(baseUrl)
.then((res)=>{return res.json()})
.then((planet)=>{
    buscar(planet);
    galleryPlanets(planet);
})

const galleryPlanets = (planets) =>{
    const divNd = document.querySelector('[data-function="planets"]');
    for (const planet of planets) {
        const divNd2 = document.createElement("div");
        divNd2.setAttribute("style","display: flex; flex-direction:column; align-items: center");
        divNd2.innerHTML = `<img src= "${planet.image}" width="300px"><h2>${planet.name}</h2>`;
        divNd.appendChild(divNd2);//Aquí lo agregas al html
        divNd2.addEventListener('click', ()=>colocarPersonajesPorPlanet(planet.id));
    }
}

const colocarPersonajesPorPlanet = (idplanet) =>{//Esto es filtrar los personajes por planeta
    const nextUrl = `http://localhost:3000/characters?idPlanet=${idplanet}`;
    fetch(nextUrl)
    .then((res)=>{return res.json()})
    .then((personaje)=>{crearPersonajes(personaje)})
}

const crearPersonajes = (personajes) =>{
    const divNd = document.querySelector('[data-function="characters"]');
    divNd.textContent = "";
    for (const personaje of personajes) {
        const divNd2 = document.createElement("div");
        divNd2.setAttribute("style","display: flex; flex-direction:column; align-items: center");
        divNd2.innerHTML = `<img src= "${personaje.avatar}" width="300px"><h2>${personaje.name}</h2>`;
        divNd.appendChild(divNd2);
        divNd2.addEventListener('click', ()=>colocarDatosPorPersonaje(personaje.idPlanet));
    }
    divNdUniversal.innerHTML = "";//Luego que aparezcan los personas volver a resetear el div universal
}
const colocarDatosPorPersonaje = (idplanetperson) => {
    const afterUrl = `http://localhost:3000/characters?idPlanet=${idplanetperson}`;
    fetch(afterUrl)
    .then((res)=>{return res.json()})
    .then((dato)=>{crearDatos(dato)})
}

const divNdUniversal = document.createElement("div");//divuniversal que contiene a la descripción

const crearDatos = (datos) => {
    divNdUniversal.innerHTML = "";
    for (const dato of datos) {
        const divNd2 = document.createElement("div");
        divNd2.setAttribute("style","text-align: justify");
        divNd2.innerHTML = `<p>${dato.description}</p>`;
        divNdUniversal.appendChild(divNd2);
    }
}

document.body.appendChild(divNdUniversal);//divuniversal se agrega al body, aquí se coloca que sino no se vuelve a resetear ni aparecer en pantalla
//Usar innerHTML rather than textContent porque el primero puede resetearte no solo texto sino elementos


const divNd = document.querySelector('[data-function="search"]');
const inputNd = document.createElement("input");// <input type="text" name="name" id="name">
const btnNd = document.createElement("button");
btnNd.textContent = "Buscar";
divNd.appendChild(inputNd);
divNd.appendChild(btnNd);
btnNd.addEventListener('click',()=>buscar(inputNd.value));//
const buscar = (person) =>{//fetch aquí para que busque por perons
    
}