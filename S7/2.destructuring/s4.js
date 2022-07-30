const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] };

//Esto es una manera:
const {name: nombre, itv: [año1, año2, año3]} = car;
//Esta es otra manera:
// const { name, itv } = car;

// const [year1, year2, year3] = itv;


console.log(nombre, año1, año2, año3);