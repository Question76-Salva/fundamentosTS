//* =======================
//* === tipado genérico ===
//* =======================
// trabajar con cualquier tipo de dato | en una función

// === función específica | función de un tipo de dato por defecto ===

function mostrar(dato : string) : string {
    return dato;
}

const dato = mostrar("Salva");  // sólo puedo usar los métodos de tipo string "dato.concat, split, toLowerCase.."



// === función reutilizable/genérica | a distintos tipo de datos | que dato que recibe y devuelve es generico ===

function mostrarGenerico<T>(dato : T) : T {
    return dato;
}

// === puede recibir cualquier tipo de dato ===
const numero = mostrarGenerico(5);
const palabra = mostrarGenerico("Salvador");