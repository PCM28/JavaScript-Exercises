const btnNd = document.querySelector("button");//Se mantiene

btnNd.addEventListener("click",function () {//Se mantiene para la interación con el click
    const inputNd = document.querySelector("input");//Se mantiene

    fetch('https://api.nationalize.io?name=' + inputNd.value)//Se mantiene
        .then((response) => {return response.json();})//No se toca, es constante
        .then((data) => {//Aquí son las modificaciones y añadir cositas del s2b
        console.log(data);//Imprime la data: Es el objeto con el array y tus datos(Lo puedes quitar, de momento no)
        
        const pNd = document.createElement("p");//Se crea p
        pNd.innerHTML = "El nombre " + data.name + " tiene un " + data.country[0].country_id + " porciento de ser de " + data.country[0].probability*100;//Se le agrega al texto que se solicita
        document.body.appendChild(pNd);//Se añade ese p en el body (irá después del button)
        console.log(pNd);//imprime por consolla ese pNd
        });
});
//Cada vez que presiones consultar, se repite p que contiene los datos
// introducidos desde la web (input) y extraidos desde la base de datos 
//Api (Es el data)