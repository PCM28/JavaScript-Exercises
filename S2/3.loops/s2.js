const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const key in alien) {
    //console.log(alien[key]);//Para mostrar datos de un objeto usando for-in: console.log(objeto[key]);
    console.log("Propiedad: " + key + ", valor: " + alien[key]);
}