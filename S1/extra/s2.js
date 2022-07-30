const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [{name: "Salad", isVegan: true},{name: "Salmon", isVegan: false}, {name: "Tofu", isVegan: true}, {name: "Burger", isVegan: false}, {name: "Rice", isVegan: true}, {name: "Pasta", isVegan: true}];
// let j=0;
// for (let i = 0; i < foodSchedule.length; i++) {
//     !foodSchedule[i].isVegan ? (foodSchedule[i].name = fruits[j++], foodSchedule[i].isVegan = true) : true;
// }
// console.log(foodSchedule);
//Más óptimo
for (let i = 0; i < foodSchedule.length; i++) {
     !foodSchedule[i].isVegan ? (foodSchedule[i].name = fruits.shift(), foodSchedule[i].isVegan = true) : true;
 }
 console.log(foodSchedule);