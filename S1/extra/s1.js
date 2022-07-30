const users = [{name: "Abel", years: 43}, {name: "Maria", years: 18}, {name: "Pedro", years: 14}, {name: "Samantha", years: 32}, {name: "Raquel", years: 16}];
for (let i = 0; i < users.length; i++) {
    console.log((users[i].years > 17) ? "Usuarios mayores de edad: " + users[i].name : "Usuarios menores de edad: " + users[i].name); 
}