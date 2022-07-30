const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsCopy = [...colors]//.splice(1,1); si agregas lo comentado y borrras la línes 3 lo que te imprime es el que se ha eliminado
colorsCopy.splice(2,1);//Posición 2 es amarillo, azul es posición 1
//Si quieres que se borrre 'amarillo' es así
console.log(colorsCopy);