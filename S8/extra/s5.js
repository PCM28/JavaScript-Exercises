// Task: Hacer que cuente solo 1 vez y no más si se da más de 1 click
const inputNd = document.querySelector('[data-function="questions-number"]');
const btnNdGame = document.querySelector('[data-function="start-game"]');
const divNd = document.querySelector('[data-function="gameboard"]');
const btnNdCheck = document.querySelector('[data-function="check-game"]');
const baseUrl = `https://opentdb.com/api.php?amount=10&type=multiple`;
const respuestasPosiciones = [];//Array de trues y falses
const accountNd = document.createElement("p");
let j=0;//Contador de trues
let k=0;//Contador de falses
// Guarda la pregunta si has respondido o no con un array o objeto
createApp();

async function createApp(){
    const res = await fetch(baseUrl);
    const tests = await res.json();
    btnNdGame.addEventListener('click',()=>mostrarTests(tests.results));
    btnNdCheck.addEventListener('click',()=>mostrarArray(respuestasPosiciones));
}

const mostrarTests = (tests) =>{//Tener el index for normal
    divNd.textContent = "";//Se coloca aquí y no dentro. Cada vez que haces click se limpia y coloca las tests
   
    for (const test of tests) {
        const divNdtest = document.createElement("div");

        const pNd1 = document.createElement("p");
        const pNd2 = document.createElement("p");   
        const pNd3 = document.createElement("p");
        const pNd4 = document.createElement("p");

        divNdtest.innerHTML = `<h2>'${test.question}'</h2>`;

        pNd1.innerHTML = `${test.correct_answer}`;
        pNd2.innerHTML = `${test.incorrect_answers[0]}`;
        pNd3.innerHTML = `${test.incorrect_answers[1]}`;
        pNd4.innerHTML = `${test.incorrect_answers[2]}`;
        
        divNd.appendChild(divNdtest);

        divNd.appendChild(pNd1);
        divNd.appendChild(pNd2);
        divNd.appendChild(pNd3);
        divNd.appendChild(pNd4);
        // Ver caso de que click- switch (on-off) que al dar un click 1 vez hace 1 cosa y al darla al otro otra(Para que solo cuente 1 vez y no más veces)
        pNd1.addEventListener('click',()=>contarTrue());
        pNd2.addEventListener('click',()=>contarFalse());
        pNd3.addEventListener('click',()=>contarFalse());
        pNd4.addEventListener('click',()=>contarFalse());
    }
}

const contarTrue = () =>{
    respuestasPosiciones.push(true);
}

const contarFalse = () =>{
    respuestasPosiciones.push(false);
}

const mostrarArray = () =>{
    j=0;
    k=0;
    accountNd.textContent = "";
    for (let i = 0; i < respuestasPosiciones.length; i++) {
        if(respuestasPosiciones[i]) j++;
        else k++;
    }
    accountNd.innerHTML = `You have ${j} correct answers and ${k} incorrect answers`;
    divNd.appendChild(accountNd);
    // j=0;
    // k=0;//Preguntar si hay otra manera en vez de colocar estas 2 variables así. Permite que no se sigan acumulando los valores
}