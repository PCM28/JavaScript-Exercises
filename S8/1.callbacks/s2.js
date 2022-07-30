const userAnwsers = [];

const confirmExample = (description) => {return confirm(description)}

const promptExample = (description) => {return prompt(description)}

const father = (description,operation) => {userAnwsers.push(operation(description))}

father("Confirmado",confirmExample);
father("Pronto",promptExample);
father("Confirmado",confirmExample);
father("Pronto",promptExample);

console.log(userAnwsers);

//prompt es ventana con texto y que se puede escribir
//confirma texto con vetana y texto
//alert solo es texto