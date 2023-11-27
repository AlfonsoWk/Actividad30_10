/* 1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada 
no es un número válido indicarlo en un mensaje. */

/* let edad = Number(prompt('Ingresa tu edad: '));

if (edad >= 18) {
    console.log(`Tienes ${edad} años, puedes conducir`);
} else if (edad > 0 && edad < 18) {
    console.log(`Tienes ${edad} años, no puedes conducir`);
} else {
    console.log(`Tiene ${edad} años, no es un número válido`);
}  */

/* 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos 
de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar 
el mensaje “Introduce un número válido”.

Ejemplo:

Input: 5
Input: 50
Input: hola10
Output: Suficiente
Output: Número erróneo
Output: Introduce un número válido */

/* let nota = Number(prompt('Ingresa tu nota: '));

if (nota >= 0 && nota <= 2) {
    alert(`Tu nota ${nota} es muy deficiente`);
} else if (nota >= 3 && nota <= 4){
    alert(`Tu nota ${nota} es insuficiente`);
} else if (nota >= 5 && nota <= 6){
    alert(`Tu nota ${nota} es suficiente`);
} else if (nota === 7){
    alert(`Tu nota ${nota} esta bien`);
} else if (nota === 8 || nota === 9){
    alert(`Tu nota ${nota} es notable`);
} else if (nota === 10){
    alert(`Tu nota ${nota} es sobresaliente`);
}  else if (nota < 0 || nota > 10) {
    alert(`Tu nota ${nota} es un número erróneo`);
}  else  {
    alert('Introduce un número válido');
}   */


/* 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas 
concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp */

/* let cadenas = [];
let palabras;

do {
    palabras = prompt('Ingrese una palabra');

    if (palabras) {
        let agregarOtra = confirm("¿Quieres agregar alguna otra palabra?");
        cadenas.push(palabras);
        if (!agregarOtra) {
            break;
        }
    }
} while (palabras);

if (cadenas.length > 0) {
    let resultado = cadenas.join('-');
    console.log("Palabras concatenadas:", resultado);
} else {
    console.log("No se ingresaron palabras.");
} */


/* 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo 
números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
 */

/* let numerosArray = [];
let numeros;

do {
    numeros = Number(prompt('Ingrese un número'));

    if (isNaN(numeros)) {
        if (numeros !== null) {
            alert(`El valor ingresado no es un número válido`);
        }
    } else {
        let agregarOtro = confirm("¿Quieres agregar otro número?");
        numerosArray.push(numeros);

        if (!agregarOtro) {
            break;
        }
    }
} while (numeros !== null);

if (numerosArray.length > 0) {
    let sum = 0;
    for (let i = 0; i < numerosArray.length; i++) {
        sum += numerosArray[i];
    }
    console.log("Suma de números ingresados:", sum);
} else {
    console.log("No se ingresaron números.");
} */


/* 5- Realizar una página con un script que calcule el valor de la letra de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».

Ejemplo: 



Input:  40773821 
Output: ‘L’ */

/* let letras = 'TRWAGMYFPDXBNJZSQVHLCKE';
let dni;

do {
  dni = prompt('Ingrese un dni Valido');

  if (dni) {
    if (isNaN(dni)) {
      alert('Ingrese un numero valido');
    } else {
      let posicion = dni % letras.length;
      alert(letras[posicion]);
    }
  }
} while (dni); */

/* 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

1
22
333
4444
55555
666666
……. */


/* for (let i = 1; i <= 30; i++) {
    let linea = '';
    for (let j = 1; j <= i; j++) {
        linea += i;
    }
    console.log(linea);
} */


/* 7- Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50)  de la siguiente 
forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1 */

/* let num = Number(prompt('Ingrese un número mayor a 1 y menor a 50'));

if (num > 1 && num < 50) {
    for (let i = num; i >= 1; i--) {
        let linea = '';
        for (let j = 1; j <= i; j++) {
            linea += i;
        }
        console.log(linea);
    }
} else {
    alert('Número fuera del rango permitido.');
} */


/* 8- Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
…… */


/* let num = Number(prompt('Ingrese un número mayor a 1 y menor a 50'));

if (num > 1 && num < 50) {
    for (let i = 1; i <= num; i++) {
        let linea = '';
        for (let j = 1; j <= i; j++) {
            linea += j;
        }
        console.log(linea);
    }
} else {
    alert('Número fuera del rango permitido.');
} */


/* 9- Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9 y que cada 5 líneas muestre una línea 
horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
let i = 07

8 (Múltiplo de 4)
9 (Múltiplo de 9)
10 */


/* for (let i = 1; i <= 500; i++) {
    let mensaje = `${i}`;

    if (i % 4 === 0) {
        mensaje += " es múltiplo de 4";
    }
    else if (i % 9 === 0) {
        mensaje += " es múltiplo de 9";
    }

    console.log(mensaje);
} */


/* 10- Realiza un script que pida número de filas y columnas y escriba una tabla. Dentro de cada una de las celdas deberá escribirse un número 
consecutivo en orden descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

Ejercicios con Math */

/* 11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp */

/* let nombres = [];
let edades = [];

for (let i = 0; i < 3; i++) {
    let nombre = prompt(`Ingrese el nombre ${i + 1}`);
    let edad = parseInt(prompt(`Ingrese la edad de ${nombre}`));

    if (!isNaN(edad)) {
        nombres.push(nombre);
        edades.push(edad);
    } else {
        alert("Por favor, ingrese una edad válida.");
        i--;
    }
}
let posicionMaxima = edades.indexOf(Math.max(...edades));

console.log(`La persona mayor es ${nombres[posicionMaxima]} con ${edades[posicionMaxima]} años.`); */


/* 12- Realiza un script que genere un número aleatorio entre 1 y 99 */

/* let numeroAleatorio = Math.floor(Math.random() * 99) + 1;
console.log(`Número aleatorio: ${numeroAleatorio}`); */


/* Ejercicios con String */

/* 13- Realiza un script que pida un texto y lo muestre en mayúsculas. */

/* let texto = prompt('Introduce un texto');
console.log(texto);

let textoMayusculas = texto.toUpperCase();
console.log(textoMayusculas) */

/* 14- Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace. Por 
ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”. */

/* let cadena = prompt('Introduce una frase');
let resultado = '';

for (let i = 0; i < cadena.length; i++) {
    resultado += cadena[i];

    if (i !== cadena.length - 1) {
        resultado += '-';
    }
}

console.log(resultado); */


/* 15- Realiza un script que cuente el número de vocales que tiene un texto. */

/* let texto = prompt('Introduce una palabra o frase');
let cantidadVocales = 0;

for (let i = 0; i < texto.length; i++) {
    if ("aeiouAEIOU".includes(texto[i])) {
        cantidadVocales += 1;
    }
}

console.log(`Cantidad de vocales: ${cantidadVocales}`); */


/* 16- Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá 
mostrar “lat euq aloh”. */

/* let cadenaTexto = prompt('Introduce una palabra o frase');
console.log(cadenaTexto);

let cadenaRevertida = cadenaTexto.split('').reverse().join('');

console.log(cadenaRevertida); */


/* 17- Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.

Ejemplo:

Input: Hola mundo

Output: la vocal ‘o’ está en la posición 1 */

/* let vocal = prompt('Introduce una palabra o frase');
console.log(`Texto introducido: ${vocal}`);

let posicionPrimeraVocal = -1;
let primeraVocal = ''; 

for (let i = 0; i < vocal.length; i++) {
    if ("aeiouAEIOU".includes(vocal[i])) {
        primeraVocal = vocal[i];
        posicionPrimeraVocal = i + 1;
        break; 
    }
}

if (posicionPrimeraVocal !== -1) {
    console.log(`La primera vocal en '${vocal}' es '${primeraVocal}' y está en la posición ${posicionPrimeraVocal}`);
} else {
    console.log(`No se encontraron vocales en '${vocal}'`);
} */
