const baseUrl = "http://localhost:3000/diary";//Para todo ejericio json activar el comando del servidor

fetch(baseUrl)
.then((responde)=>{return responde.json();})
.then(book=>{//2 funciones primero se ordenar y luego construir
    const bookOrdened = ordenarPaper(book);
    imprimirPaper(bookOrdened);
});

const ordenarPaper = (book) => { return book.sort((a,b)=>new Date(a.date)-new Date(b.date))}//Quitar return y quitar const line 6
const imprimirPaper = (book) =>{
    for (const paperBook of book) {
        const divNd = document.createElement("div");
        divNd.innerHTML = `<h3>${paperBook.title}</h3><h5>${paperBook.date}</h5><p>${paperBook.description}</p>`;
    
        const btnNd = document.createElement("button");//Esto lo sabes
        btnNd.textContent = 'X';//Lo sabes

        btnNd.addEventListener('click',()=>eliminarPaper(divNd));
        divNd.appendChild(btnNd);
        document.body.appendChild(divNd);
    }
}

const eliminarPaper = (paperNd) =>{paperNd.remove()}