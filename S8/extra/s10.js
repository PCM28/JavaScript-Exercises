let pagina = 1;

getGender();

async function getGender(){
    const res = await fetch(`http://localhost:3000/characters?_page=${pagina}&_limit=5`);
    const resJSON = await res.json();
    
    const btnNd = document.createElement("button");
    btnNd.textContent = "Siguiente";
    document.body.appendChild(btnNd);
    btnNd.addEventListener('click',()=>getCharacters(btnNd));
    

    mostrarPersonajes(resJSON);//Aquí va la función    
}

const mostrarPersonajes = (personajes) =>{
    const divNd = document.createElement("div");
    divNd.setAttribute("style","display:flex; padding:50px; justify-content: space-between");
    for (const personaje of personajes) {   
        const divNd2 = document.createElement("div");
        divNd2.innerHTML = `<img src='${personaje.image}' width:"20px"><h2>'${personaje.name}'</h2>`;
        divNd2.setAttribute("style","display:flex; flex-direction:column;align-items: center; flex-wrap: wrap");
        divNd.appendChild(divNd2);
        document.body.appendChild(divNd);
    }
}

const getCharacters = async (btnNd) => {
    pagina++;
    const res = await fetch(`http://localhost:3000/characters?_page=${pagina}&_limit=5`);
    const resJSON = await res.json();
    mostrarPersonajes(resJSON);//Aquí va la función
    if(pagina>3) btnNd.remove();        
}