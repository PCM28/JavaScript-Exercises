const planets__divNd = document.querySelector('[data-function="planets"]');
const search__divNd = document.querySelector('[data-function="search"]');
const characters__divNd = document.querySelector('[data-function="characters"]');



const createApp = () => {createApp_planets()}

createApp();//Si lo colocas en la línea 2 no correa, en javascript va en cascada. Como lo ha explicado hoy el máquina de santi

async function createApp_planets(){
    const res = await fetch('http://localhost:3000/planets');//Aquí url general y luego añadaes las fetchs específicas
    const planetas = await res.json();
    //Aquí el resto de funciones
    mostrarPlanetas(planetas);
}

const mostrarPlanetas = (planetas)=>{
    for (const planeta of planetas) {
        const divNd = document.createElement("div");
        divNd.innerHTML= `<img src='${planeta.image}' width=250 height=200> <h2>'${planeta.name}'</h2>`;
        planets__divNd.appendChild(divNd);
        divNd.addEventListener('click',()=>crearPersonas(planeta.id));//Filtrar de manera local no con el backend
    }
}

async function crearPersonas(planetId) {//la clave en común entre el planeta y el personaje
    const res = await fetch(`http://localhost:3000/characters?idPlanet=`+planetId);
    // const res = await fetch(`http://localhost:3000/characters?idPlanet=${planetId}`); También 
    
    const personajes = await res.json();
    mostrarPersonajes(personajes);
    crearBuscador(personajes);
}

const mostrarPersonajes = (personas) => {
    characters__divNd.textContent = "";
    for (const personaje of personas) {
        const divNd = document.createElement("div");
        divNd.innerHTML = `<img src='${personaje.avatar}' width=150> <h2>'${personaje.name}'</h2>`;
        characters__divNd.appendChild(divNd);
    }
}

const crearBuscador=(personajes)=>{
    // btnNd.innerHTML = "";//Para que no se acumulen imágenes
    search__divNd.innerHTML = "";
    const inputNd = document.createElement("input");
    // const btnNd = document.createElement("button");
    // btnNd.textContent = `Buscar`;

    search__divNd.appendChild(inputNd);
    // search__divNd.appendChild(btnNd);

    inputNd.addEventListener("input",()=>mostrarPersonajesFiltrados(inputNd.value,personajes));
    // btnNd.addEventListener("click",()=>mostrarPersonajesFiltrados(inputNd.value,personajes));
}

const mostrarPersonajesFiltrados =(valueInput, personajes)=>{//Para filtrar hace falta 2 cosas  (el array) y el filtro (este caso será nombre)
    const imgNd = document.createElement("div");
    let personajesFiltrados = personajes.filter(function (personaje) {
        // return personaje.name.toLowerCase() === valueInput.toLowerCase(); si quiero tenerlo escribir completo el nombre
        return personaje.name.toLowerCase().includes(valueInput.toLowerCase());//Si quieres tenerlo, escribir un par de letras del nombre
    });
    // console.log(personajesFiltrados);
    mostrarPersonajes(personajesFiltrados);
}