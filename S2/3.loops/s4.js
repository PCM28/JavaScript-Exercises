const toys = [{id: 5, name: 'Buzz MyYear'}, {id: 11, name: 'Action Woman'}, {id: 23, name: 'Barbie Man'}, {id: 40, name: 'El gato con Guantes'},{id: 40, name: 'El gato felix'},{id: 5, name: 'Buzz MyYear'}]
for (const i of toys) {
    toys.splice(i.name.indexOf("gato"),i.name.indexOf("gato"));//NOTA NO ESCRIBIR SLICE SI QUIERES USAR SPLICE
}
console.log(toys);