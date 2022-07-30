const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
]
const categ = [];

//Muy útil los 3 apartados, si piden usar for-of puedes usar los for-of que quieras no solo 1, usar los que mejor te convengan y de la manera más estratégica. 
//Relacionar movie->movies; movie.categories->movie; categorie->movie.categories
//Usar el if negadao también como una de las primeras opciones ya que la primera opción fue: "Si es igual al otro", esa no ; sino "Sino tiene el array catg la categoría, entonces se guarda"
for (const movie of movies) {
    for (const categorie of movie.categories) {
        if(!categ.includes(categorie)){
            categ.push(categorie);
        }     
    }
}
console.log(categ);