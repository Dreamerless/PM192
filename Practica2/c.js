const personas = [ 
  { nombre: "Ana", edad: 22 }, 
  { nombre: "Luis", edad: 35 }, 
  { nombre: "María", edad: 28 } 
];

// 1. Usar .find() para buscar a la persona con nombre "Luis"
const personaLuis = personas.find(persona => persona.nombre === "Luis");
console.log(personaLuis); // { nombre: "Luis", edad: 35 }

// 2. Usar .forEach() para imprimir el nombre de cada persona con su edad
personas.forEach(persona => {
  console.log(`${persona.nombre} tiene ${persona.edad} años.`);
});
// Imprime:
// Ana tiene 22 años.
// Luis tiene 35 años.
// María tiene 28 años.

// 3. Usar .reduce() para sumar todas las edades
const totalEdades = personas.reduce((acumulador, persona) => acumulador + persona.edad, 0);
console.log(`La suma total de edades es: ${totalEdades}`); // La suma total de edades es: 85
