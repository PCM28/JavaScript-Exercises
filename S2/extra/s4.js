function findArrayIndex(textos, texto) {
    for (let i = 0; i < textos.length; i++) {
        if(textos[i]===texto) return i;
    }
}

let textos = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
console.log(findArrayIndex(textos,'Salamandra'));