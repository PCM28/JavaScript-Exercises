const divNd__characteres = document.querySelector('[class="c-characters"]');
const divNd__arena = document.querySelector('[data-function="arena"]');
const baseUrl = `http://localhost:3000/characters`;
const formNd = document.querySelector('form');

const i=0;
createPersonajes();

async function createPersonajes() {
    const res = await fetch(baseUrl);
    const personajes = await res.json();
    mostrarPersonajes(personajes);
}

const mostrarPersonajes = (personajes) =>{
    for (const personaje of personajes) {
        const divNd = document.createElement("div");
        const imgNd = document.createElement("img");
        const pNd = document.createElement("p");

        imgNd.src = personaje.avatar;
        pNd.textContent = personaje.name;
        
        divNd.appendChild(imgNd);
        divNd.appendChild(pNd);
        divNd.setAttribute("style","padding:0 50px");
        divNd__characteres.appendChild(divNd);
    }
}

const obtenerData = (event) =>{//Se añadae event y la línes 34 para evitar que refresque la página luego de dar al botón Add
    event.preventDefault();
    console.log(formNd);
    const data = Object.fromEntries(new FormData(formNd).entries());
    data.defense = Number(data.defense);
    data.critic = Number(data.critic);
    data.vitality = Number(data.vitality);

    data.damage = data.damage.split(',');

    console.log(data);

    fetch(baseUrl, {
        method: `POST`,
        headers:{
            'Accept':'application/json, text/plain, */*', 
            'Content-Type':'application/json'
        },
        body: JSON.stringify(data)
    }).then(res=>res.json())
      .then(res=>consolog.log(res));
}

formNd.addEventListener("submit", obtenerData);