"use strict";
//* =============
//* === clase ===
//* =============
class Persona {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
}
let persona = new Persona("Salva", "Belloso Santos", 45);
console.log(persona);
