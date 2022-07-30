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
//------------------------ First method ---------------------------
// let suma = 0, i=0;
// for (const user of users) {//user = spiderman
//     for (const keys in user.favoritesSounds) {//user.favoritesSounds = quieres que de los 2 datos que peude ser spiderman apliques el for in en concreto al segundo a favoritesSounds
//         let types = user.favoritesSounds[keys];//types = imprime objetos de favoritesSounds
//         div = types.length;
//         for (const type in types) {
//             let things = types[type];// things = imprime los datos de los objetos del objeto favoritesSounds
//             if(things<99) {
//                 suma+=things;
//                 i++;
//             }
//         }
//     }
// }
// console.log(suma/i);
//----------------------------------------------------------------

const volumeInfo = { totalVolume: 0, totalCount: 0 };
let suma = 0;
for (const user of users) {
    for (const key in user.favoritesSounds) {
        let favoriteSound = user.favoritesSounds[key];
        volumeInfo.totalVolume+=favoriteSound.volume;
        volumeInfo.totalCount++;
    }
}
console.log(volumeInfo.totalVolume/volumeInfo.totalCount);