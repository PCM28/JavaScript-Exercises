function swap(array,x,y) {
   let aux = array[x];
   array[x] = array[y];
   array[y] = aux;
   return array;
}

let array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];

console.log(swap(array,3,2));