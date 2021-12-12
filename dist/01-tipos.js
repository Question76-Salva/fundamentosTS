"use strict";
//* ========================
//* === tipos básicos ts ===
//* ========================
// string
let myTypeScring = 'Hello word!';
// number
let myTypeNumber = 45;
// boolean
let myTypeBoolean = true;
// array numbers
let arrayNumber = [1, 2, 3];
let arrayNumber2 = [4, 5, 6];
// array strings
let arrStrings = ["Uno", "Dos", "Tres"];
// array diferentes tipos | usar lo menos posible
let arrayAny = ["Hola", 45, false];
// tuple -> especie de array, sabe cuantos elementos contiene el array y que tipo hay en cada posición
//          es más extricto que el 'any'
let tuplePlayers = ['Doncic', 2, true];
// tuple array
let players;
players = [
    [1, 'Lebron'],
    [2, 'Durant'],
    [3, 'Carry'],
];
// ===========================
// === inferencia de tipos ===
// ===========================
// ts se encarga de asignar el tipo de dato a una variable dependiendo del valor inicial que asignemos 
// a dicha variable
let myVariable; // pasa a ser tpo 'any'
let myVariable3 = 'Hola mundo'; // pasa a ser string
let myVariable4 = 333; // pasa a ser number
let myVariable5 = true; // pasa a ser boolean
// ============================
// === composición de tipos ===
// ============================
// crear tipos complejos/combinados -> existen 2 tipos : union y generic
// unions -> podemos declarar que una variable podría ser de 2 o más tipos
let myVariable6;
