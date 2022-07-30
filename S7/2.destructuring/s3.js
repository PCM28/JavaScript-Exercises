const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};

// const {name: nombre, race: raza} = animalFunction();
const {name, race} = animalFunction();//Esta es la manera óptima

console.log(nombre, raza);