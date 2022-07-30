const cities = [{isVisited:true, name: 'Tokyo'}, 
{isVisited:false, name: 'Madagascar'},
{isVisited:true, name: 'Amsterdam'}, 
{isVisited:false, name: 'Seul'}
];

const citiesNames = cities.map(function (city) {
    (city.isVisited) ? city.name = city.name + " Visitado" : city.name = city.name + " No Visitado";
    return city.name;
})

console.log(citiesNames);