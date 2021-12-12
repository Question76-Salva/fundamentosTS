//* =================
//* === funciones ===
//* =================

// void -> no hay return | no devuelve nada

function greet(name : string) : void {
    console.log(`Hello, ${name.toUpperCase()} !!`);
}

greet('Salva');


// valores por defecto

function greetDos(name : string = 'Salva') : void {
    console.log(`Hello, ${name.toUpperCase()} !!`);
}

greetDos();


// return -> retorna un valor

function getNumber() : number {
    return Math.floor(Math.random() * 100);
}

console.log(getNumber());


// pasar un objeto como argumento de la función

function printPosition(position : {lat : number, long: number}) : void {
    console.log(`Latitud y Longitud son: LATITUD ${position.lat} LONGITUD ${position.long}`);
}

printPosition({lat: 3, long: 55});