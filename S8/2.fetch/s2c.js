// const btnNd = document.querySelector("button");

// function eliminar(pNd) {
//     pNd.remove();
// }

// btnNd.addEventListener("click",function () {
//     const inputNd = document.querySelector("input");

//     fetch('https://api.nationalize.io?name=' + inputNd.value)
//         .then((response) => {return response.json();})
//         .then((data) => {
//         console.log(data); 
        
//         const pNd = document.createElement("p");
        
        
//         // const btnNd2 = document.createElement("button");
//         // btnNd2.innerHTML = "X";
        
//         pNd.innerHTML = `El nombre   ${data.name} tiene un ${data.country[0].probability*100} porciento de ser de  ${data.country[0].country_id}  <button onclick='eliminar(${pNd})'>X</button>`;
//         document.body.appendChild(pNd);
//         console.log(pNd);
//         });
// });

const baseUrl = 'https://api.nationalize.io?name=';

const inputNd = document.querySelector("input");
const btnNd = document.querySelector("button");

const eliminar = (p) =>{p.remove()}

const pintar = (res) =>{//Aquí es donde se agrega y modifica código
    const pNd = document.createElement("p");
    const btnEliminateNd = document.createElement("button");

    btnEliminateNd.textContent = "X";
    pNd.textContent = `El nombre ${res.name} tiene un ${res.country[0].probability*100} por ciento de ser ${res.country[0].country_id}`;
    btnEliminateNd.addEventListener("click",()=>eliminar(pNd));
    pNd.appendChild(btnEliminateNd);
    document.body.appendChild(pNd);
    
}

const peticion = () => {
    fetch(baseUrl + inputNd.value).then((res)=>res.json()).then((res)=>{pintar(res);})
}

btnNd.addEventListener("click",peticion);