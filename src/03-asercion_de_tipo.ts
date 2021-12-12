//* =========================
//* === aserción de tipos ===
//* =========================

// si no sabemos exactamente el "tipo" de un valor, podemos hacer un "casting"
// (convertir) al valor que nosotros queramos
// Supongamos que recibimos un valor desde una api o un input de nuestra aplicación

let channel : any = 'DominiCode';

// convertir (cast) a un string | aserción de tipo
let channelStr = <string>channel;

// otra forma de hacerlo
let channelStrDos = channel as string;

// es común usar la aserción de tipos cuando trabajamos con html | type asertion en html
const myCanvas = document.getElementById('main') as HTMLCanvasElement;
