// const pNd = document.createElement("p");. de esta manera solo se popdrá ingresar al primer div y no al segundo por que no hay más solo hay 1 para eso, usar la manera de línea 10
// const pNd2 = document.createElement("p");

// pNd.innerHTML = "Voy adentro!";
// pNd2.innerHTML = "Voy adentro!";

const allDivs = document.querySelectorAll('[class="fn-insert-here"]');

for (let i = 0; i < allDivs.length; i++) {
    allDivs[i].innerHTML = "<p>Voy adentro!</p>";
}