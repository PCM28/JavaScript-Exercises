const aliens = [{name: 'Zalamero', planet: 'Eden', age: 4029},
                {name: 'Paktu', planet: 'Andromeda', age: 32},
                {name: 'Cucushumushu', planet: 'Marte', age: 503021}];

const mutations = [{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},
                    {name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},
                    {name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}];

const foundName = aliens.find(function (alien) { if(alien.name==="Cucushumushu") return alien;});

const foundMutation= mutations.find(function (mutation) {if(mutation.name === "Porompompero") return mutation;});

//Nueva Manera de agregar un objeto dentro de otro para uno al final. EJM: Este
const fusion = {...foundName, mutation:{...foundMutation}};//el objeto de la mutación lo queremos meter en la propiedad .mutation del objeto fusionado
//Si solo colocas ...foundMutation te imprime:
// {
//     name: 'Porompompero',
//     planet: 'Marte',
//     age: 503021,
//     description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'
// }
// Lo que quieres es que te imprima los 2 no que el segunda se sobreescribas al primero y para 
// eso se agrega "mutation:{...foundMutation}"
console.log(fusion.mutation);