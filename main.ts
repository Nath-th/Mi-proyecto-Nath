//contar las marcas que hay
import { marcas } from "./data/data";

const tipoMarcas = new Set();
  
marcas.forEach(auto => {
    tipoMarcas.add(auto.marca);
});

const numeroDeMarcas = tipoMarcas.size;

console.log("#Marcas existentes");  
console.log("Número de marcas únicas:", numeroDeMarcas);
console.log();

marcas.sort((a, b) => {
    return a.marca.localeCompare(b.marca);
});

console.log("#Ordenamiento alfabetico");
console.log(marcas);
console.log();

// cual es el product con mayor existencia
import { inventory } from "./data/data";
const productoConMayorCantidad = inventory.reduce((max, current) => {
    return current.quantity > max.quantity ? current : max;
}, inventory[0]);
//una manera de iterar los objetos, entre current (valor actual)
//y max el valor que se tiene como mayor
//el el cual si current es mayor que el actual max, el current pasa a ser max para seguir iterando

console.log("#Revicion inventario");
console.log("Producto con mayor cantidad:", productoConMayorCantidad);
console.log();

const nombreProducto = "mango";
const cantidad = inventory.find(item => item.name === nombreProducto)?.quantity;

console.log("#Identificador de cantidad de x producto");
console.log("Cantidad de ",nombreProducto, "en inventario es de ", cantidad,"unidades");
console.log();

//heroes. caul es la cuidad que tiene ams heroes

import { heroes } from "./data/data";

const ciudadHeroes: { [key: string]: number } = {};

heroes.forEach(hero => {
  if (ciudadHeroes[hero.city]) {
    ciudadHeroes[hero.city]++;
  } else {
    ciudadHeroes[hero.city] = 1;
  }
});

// Encontrar la ciudad con más héroes
let mostCommonCity = "";
let masHeroes = 0;

for (const city in ciudadHeroes) {
  if (ciudadHeroes[city] > masHeroes) {
    mostCommonCity = city;
    masHeroes = ciudadHeroes[city];
  }
}

console.log("#Cantidad heroes por cuidad");
console.log(ciudadHeroes);
console.log("#Ciudad con mas heroes");
console.log(mostCommonCity);
console.log();

//sumar todas las edades
import { persona } from "./data/data";


interface persona {
    edad: number;
}

function sumarEdades(personas: persona[]): number {
    return personas.reduce((total, persona) => total + persona.edad, 0);
}

const sumaTotal = sumarEdades(persona);

console.log("#Suma edades");
console.log("La suma total de las edades es:", sumaTotal);

const promedio_edades = sumaTotal/persona.length

console.log()
console.log("El promedio de edades de las personas es de",promedio_edades, "años.")

