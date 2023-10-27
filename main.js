/*
Tarea:
1- Hacer el quiz de Introducción a JavaScript
2- Usando métodos matemáticos
Ingresar 3 números
Indicar cual es el mayor
Indicar cual es el menor
Obtener la raíz cuadrada del segundo número
3- Usando métodos de string
Recibir un nombre completo como entrada y utilice split para dividirlo en nombre y apellido, y luego use charAt
 y toUpperCase para capitalizar la primera letra de cada palabra.
*/

let num1 = Number(prompt('Ingrese el primer numero: '));
let num2 = Number(prompt('Ingrese el segundo numero: '));
let num3 = Number(prompt('Ingrese el tercer numero: '));

console.log('num1: ', num1);
console.log('num2: ', num2);
console.log('num3: ', num3);

let mayor = (num1 > num2 && num1 > num3) ? num1 :
            (num2 > num1 && num2 > num3) ? num2 :
            (num3 > num1 && num3 > num2) ? num3 :
            "Los tres números son iguales";

console.log("El número más grande es: " + mayor);

let menor = (num1 < num2 && num1 < num3) ? num1 :
            (num2 < num1 && num2 < num3) ? num2 :
            (num3 < num1 && num3 < num2) ? num3 :
            "Los tres números son iguales";

console.log("El número más chico es: " + menor);

let raizCuadrada = Math.sqrt(num2);
let raizCuadradaRedondeada = Math.round(raizCuadrada);
let raizCuadradaRedondeadaAbajo = Math.floor(raizCuadrada); 
let raizCuadradaRedondeadaArriba = Math.ceil(raizCuadrada); 

console.log("La raíz cuadrada de " + num2 + " es " + raizCuadrada);
console.log("Raíz cuadrada redondeada de: " + num2 + " es " + raizCuadradaRedondeada);
console.log("Raíz cuadrada redondeada hacia abajo de: " + num2 + " es " + raizCuadradaRedondeadaAbajo);
console.log("Raíz cuadrada redondeada hacia arriba de: " + num2 + " es " + raizCuadradaRedondeadaArriba);


let nombre = prompt('Ingrese su Nombre y Apellido: ');
console.log( "Su nombre y apellido es: " + nombre )
console.log(nombre.split(' '));

let partesNombre = nombre.split(' ');
let nombreCapitalizado = partesNombre[0].charAt(0).toUpperCase() + partesNombre[0].slice(1);
let apellidoCapitalizado = (partesNombre[1] || "").charAt(0).toUpperCase() + (partesNombre[1] || "").slice(1);

let nombreCompletoCapitalizado = nombreCapitalizado + " " + apellidoCapitalizado;

console.log("Nombre completo capitalizado: " + nombreCompletoCapitalizado);







