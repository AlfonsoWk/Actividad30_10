/* 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”. */

/* alert("Un mensaje") */

/* 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write). */

/* document.write("Hello World");

console.log("Hello World"); */

/* 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5. */

/* console.log(3 + 5);

num1 = 3;
num2 = 5;

console.log(num1 + num2); */


/* 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
Ejemplo: 

input: Coder 
Output: Hola Coder */

/* nombreUser = prompt('Ingresa tu nombre: ');
console.log("Hola " + nombreUser); */


/* 5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt

https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt */

/* num3 = parseInt(prompt('Ingresa el primer número: '));
num4 = parseInt(prompt('Ingresa el segundo número: '));
console.log('El resultado de la sumatoria es ' + (num3 + num4 )); */


/* 6.-Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3

Output: El 15 es el número más grande */

/* num5 = parseInt(prompt('Ingresa el primer número: '));
num6 = parseInt(prompt('Ingresa el segundo número: '));
let mayor = (Math.max(num5, num6));
console.log('El número más grande es: ' + mayor) */


/* 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
Ejemplo: 

input: 15 , 3, 9


Output: El 15 es el número más grande */

/* num7 = parseInt(prompt('Ingresa el primer número: '));
num8 = parseInt(prompt('Ingresa el segundo número: '));
num9 = parseInt(prompt('Ingresa el tercer número: '));
let mayorNum = (Math.max(num7, num8, num9));
console.log('El número más grande es: ' + mayorNum) */


/* 8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 

input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2. */

/* num10 = Number(prompt('Ingresa un número:'));
let resto = (num10 % 2);
let mensaje = `El ${num10} ${resto === 0 ? 'es' : 'no es'} divisible por 2`;
console.log(mensaje);


num11 = Number(prompt('Ingresa un número:'));
let modulo = num11 % 2;

if (modulo === 0) {
    console.log(`El ${num11} es divisible por 2`);
} else {
    console.log(`El ${num11} no es divisible por 2`);
} */


/* 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:


input: Hola mundo
Output: oauo */

/* let frase = prompt('Ingrese una frase');
let vocales = '';

console.log(frase.length);

for (let i = 0; i < frase.length; i++) {
  
  if (
    frase.charAt(i).toLowerCase() === 'a' ||
    frase.charAt(i).toLowerCase() === 'e' ||
    frase.charAt(i).toLowerCase() === 'i' ||
    frase.charAt(i).toLowerCase() === 'o' ||
    frase.charAt(i).toLowerCase() === 'u'
  ) {
    vocales = vocales + frase.charAt(i).toLowerCase() + '-';
  }
}

if (vocales.length > 0) {
  console.log('Las vocales son: ', vocales);
} else {
  console.log(`Tu frase "${frase}" no tiene vocales`);
} */


/* 10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
Ejemplo: 

input: 20


Output: El 20 es divisible por 2. */


/* let num1 = Number(prompt('Ingrese un número'));

if (num1 % 2 === 0) {
  console.log(`${num1} es divisible por 2`);
} else if (num1 % 3 === 0) {
  console.log(`${num1} es divisible por 3`);
} else if (num1 % 5 === 0) {
  console.log(`${num1} es divisible por 5`);
} else if (num1 % 7 === 0) {
  console.log(`${num1} es divisible por 7`);
} else {
  console.log(`El número ingresado no es divisible por 2, 3, 5 o 7`);
} */


/* 11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)
Ejemplo: 

input: 20
input: 210

Output: El 20 es divisible por 2 y por 5.
Output: El 210 es divisible por 2, por 3, por 5 y por 7. */

let num1 = Number(prompt('Ingrese un número'));

if (num1 % 2 === 0) {
  console.log(`${num1} es divisible por 2`);
}  if (num1 % 3 === 0) {
  console.log(`${num1} es divisible por 3`);
}  if (num1 % 5 === 0) {
  console.log(`${num1} es divisible por 5`);
}  if (num1 % 7 === 0) {
  console.log(`${num1} es divisible por 7`);
} else {
  console.log(`El número ingresado no es divisible por 2, 3, 5 o 7`);
}
