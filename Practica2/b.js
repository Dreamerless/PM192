const productos = [ 
  { nombre: "Laptop", precio: 12000 }, 
  { nombre: "Mouse", precio: 250 }, 
  { nombre: "Teclado", precio: 750 }, 
  { nombre: "Monitor", precio: 3000 } 
];

// 1. Filtrar productos con precio mayor a 1000
const productosFiltrados = productos.filter(producto => producto.precio > 1000);

// 2. Mapear para obtener solo los nombres
const nombres = productosFiltrados.map(producto => producto.nombre);

console.log(nombres); // ["Laptop", "Monitor"]
