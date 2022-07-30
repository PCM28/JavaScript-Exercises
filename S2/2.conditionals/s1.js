// console.log(j > 1 ? alumns[i].name + " Aprobado" : alumns[i].name + " Suspenso");
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (let i = 0; i < alumns.length; i++) {
    let j=0;
    if(alumns[i].T1) j++;
    if(alumns[i].T2) j++;
    if(alumns[i].T3) j++;
    // Bucle: De manera óptima para miles siempre y cuando no haya otrp atributo con valor true
    // for (const key in alumns[i]) { 
    //     if(alumns[i][key]===true) j++;
    // }

    (j>1) ? alumns[i].isApproved = true : alumns[i].isApproved = false;//Estructura: Objeto.propiedad = valorDeLaPropiedad
}
console.log(alumns);