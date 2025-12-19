const ventas = [
  {
    manzanas: 3,
    peras: 2,
    carne: 1,
    jugos: 5,
    dulces: 2,
  },
  {
    manzanas: 1,
    sandias: 1,
    huevos: 6,
    jugos: 1,
    panes: 4,
  },
];

const productos = [];
let total = 0;

for (const item of ventas) {
  const claves = Object.keys(item); // ['carnes', 'jugos' , ...]
  const valores = Object.values(item);
  for (const key of claves) {
    // console.log(key);
    if (!productos.includes(key)) productos.push(key);
  }
  for (const value of valores) {
    total += value;
  }
}

console.log(productos);
console.log(total);

