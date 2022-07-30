const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta']
for (let i = 0; i < products.length; i++) {
    console.log(products[i].toLowerCase().includes('Camiseta'));//toLowerCase() para pasar a minúscula el string que quieras buscar, sino lo colocas y pones camiseta salta false a todos
}