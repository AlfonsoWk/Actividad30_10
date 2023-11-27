/* Prácticas con arreglos y funciones */

/* Arrays
Dificultad: 🟢
1- Crear un array llamado meses y que almacene el nombre de los doce meses del
año. Mostrar por pantalla en forma de lista los doce nombres del arreglo. */

/* const monthsArray = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  
  console.log(monthsArray);
  
  let mesesListados = '<ul>';
  
  for (let i = 0; i < monthsArray.length; i++) {
    mesesListados += `<li>${monthsArray[i]}</li>`;
  }
  
  mesesListados += '</ul>';
  
  document.write('Lista de Meses:' + mesesListados); */

  
/*   2- Crear un script que solicite al usuario mediante un prompt el nombre de
ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se
debe mostrar el arreglo generado, luego realizar las siguientes acciones:
● Mostrar la longitud del arreglo.
● Mostrar en el documento web los ítems de las posiciones primera, tercera y
última.
● Añade en última posición la ciudad de París.
● Escribe por pantalla el elemento que ocupa la segunda posición.
● Sustituye el elemento que ocupa la segunda posición por la ciudad de
'Barcelona'.
Ejemplo:
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’,
‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro,
Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo,
Egipto’] */
 
/* const cityCountrys = prompt('Introduce el nombre de una ciudad y el país al cual corresponde'); */

let citysArray = [];
let citys;
do {
    citys = prompt('Introduce el nombre de una ciudad y el país al cual corresponde');

    if (citys) {
        citysArray.push(citys);
    }
} while (citys);

console.log(citysArray)
console.log(`El arreglo tiene ${citysArray.length} elementos`)
console.log(`La ciudad - país en la primera posición es ${citysArray[0]}`)
console.log(`La ciudad - país en la tercera posición es ${citysArray[2]}`)
console.log(`La ciudad - país en la última posición es ${citysArray[citysArray.length - 1]}`);

citysArray.push('Paris, Francia');
console.log(`La ciudad - país en la última posición es ${citysArray[citysArray.length - 1]}`);