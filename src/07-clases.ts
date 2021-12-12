//* =============
//* === clase ===
//* =============

class Persona {
    nombre : string;
    apellido : string;
    edad : number;
    
    constructor(nombre : string, apellido : string, edad : number) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;        
    }
}

let persona = new Persona("Salva", "Belloso Santos", 45);

console.log(persona);