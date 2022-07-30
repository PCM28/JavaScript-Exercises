const numbersList = [];

const father = (a,b,cal) =>{return numbersList.push(cal(a,b))}

const sum = (a,b) => {return a+b}

const subtract = (a,b) => {return a-b}

father(7,8,sum);
father(9,10,subtract);
father(11,12,sum);
father(13,14,subtract);
father(15,16,sum);

console.log(numbersList);