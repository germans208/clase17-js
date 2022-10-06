// // function unaFuncion(params) {
// //     return params;    
// // }

// //let cadena = new String("Hola mundo");

// //let cadena2 = "Hola mundo"; //declaración de una variable string

// //let objeto = new Object();



// let objeto2 = {
//     nombre: "Juan", //atributo string
//     apellido: "Perez", //atributo string
//     edad: 25, //atributo number
//     saludar: function() { 
//         return "Hola mundo " + this.nombre + " " + this.apellido;
//     }
// }

// console.log(objeto2);

// console.log(objeto2.nombre);

// console.log(objeto2.saludar());gi


// //Fecha y hora
// let miFecha = new Date();

// console.log(miFecha.getDate()); // dia del mes
// console.log(miFecha.getDay()); // dia de la semana
// console.log(miFecha.getFullYear()); // año
// console.log(miFecha.getMonth()); // mes
// console.log(miFecha.getHours()); // hora
// console.log(miFecha.getMinutes()); // minutos
// console.log(miFecha.getSeconds()); // segundos

//String

// let cadena = "Manzanas,Peras,Bananas,Naranjas";

// console.log(cadena);
// console.log(cadena[3]); 
// console.log(cadena.length); //longitud de la cadena 


// console.log(cadena.indexOf("german")); //posición de la palabra

// //si devuelve -1 no existe esa palabra o letra


// console.log(cadena.slice(0, 4)); // corta la cadena desde la posición 0 hasta la 4
// console.log(cadena.slice(11,17));  
// console.log(cadena.slice(11, cadena.length)); 

// console.log(cadena.trim()); //quita los espacios en blanco


// let frutas = cadena.split(","); //separa la cadena en un array
// console.log(frutas);

// console.log(frutas[0]);
// console.log(frutas[1]);
// console.log(frutas[2]);
// console.log(frutas[3]);


// let numeroString = "1234,1234";

// console.log(numeroString.replace(",", ".")); //reemplaza la coma por un punto


let array2 = ["Hola", "Mundo", "Adios"]; //array de strings

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "Hola", "Mundo", "Adios"]


// console.log(array);
// console.log(array2);

// console.log(array2.length); //longitud del array
// console.log(array2[array2.length - 1]); //muestra el último elemento del array

// array.push(11); //añade un elemento al final del array

// console.log(array);

// array2.push("german")

// console.log(array2);

// let array3 = array.concat(array2); //concatena dos arrays

// console.log(array3);

// console.log(array2.includes("Mundos")); //devuelve true si existe el elemento en el array

// let frase = "lore ipsum dolor sit amet";

// let vocales = "aeiou";

// let c = 0;
// for (let i = 0; i < frase.length; i++) {

//     if (vocales.includes(frase[i])) {
//         c++;
//     }

// }

// console.log(`Esta frase tiene tantas vocales: ${c}`);


// let array4 = ["Manzanas", "Peras", "Bananas", "Naranjas"];

// // array4.pop(); //elimina el último elemento del array
// // array4.pop();

// // console.log(array4);


// // array4.shift(); //elimina el primer elemento del array

// // console.log(array4);

// array4.unshift("Frutillas"); //añade un elemento al principio del array

// console.log(array4);

// let dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];

// let diasConSeparador = dias.join("|"); //une los elementos del array con el separador que le indiquemos

// console.log(dias);

// console.log(diasConSeparador);

// console.log(dias.indexOf("Miercoles")); //devuelve la posición del elemento en el array

// console.log(dias.includes("Miecoles"));


let diasDeLaSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];


let dias2 = diasDeLaSemana.map(function (dia) { return dia; });


let diasMenosSabadoYDomingo = diasDeLaSemana.filter(
    function (dia) {
        return dia != "Sabado" && dia != "Domingo";
    });


console.log(diasMenosSabadoYDomingo);



