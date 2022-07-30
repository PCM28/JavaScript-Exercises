const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]
let aux = {nombre:[], count:[]};
for (const user of users) {
    for (const favoriteSound in user.favoritesSounds) {
        if(!aux.nombre.includes(favoriteSound)) aux.nombre.push(favoriteSound);
    }
}
//---------------------------------------------------------------------------------
let cont = 0;
let suma = 0;
for (const user of users) {
    for (const favoriteSound in user.favoritesSounds) {
        // if(favoriteSound.includes(aux.nombre[cont])) aux.count.push(cont2++);
        let cont2=0;
        if(aux.nombre[cont].includes(favoriteSound)) suma+=cont2;
        aux.count.push(suma);
    }
}
cont++;
console.log(aux);