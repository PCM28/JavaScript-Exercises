const btnNd = document.querySelector("button");
btnNd.addEventListener("click",function () {//Aquí es donde se utiliza el btnNd, es a quien se le aplica el método addEventListener
    const inputNd = document.querySelector("input");

    fetch('https://api.nationalize.io?name=' + inputNd.value)//Aquí se usa el inputNd obteniedo el valor
        .then((response) => {return response.json();})//Esto es la conexión por defecto, siempre es así, no se toca
        .then((data) => {console.log(data);});//Aquí sí es donde se toca, modifica y añade cosas
});