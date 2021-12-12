//* =================
//* === interface ===
//* =================

// es un contrato de código, definen la forma de los datos/data con la que vamos a trabajar
// es una especie de "molde"

interface Book {
    // === propiedades | atributos ===
    id: number;
    title: string;
    author: string;
    // propiedades opcionales ? 
    coAuthor?: string;

    // métodos | pueden ser opcionales o no
    isLoan? : (id: number) => void
}

const book : Book = {
    id: 1,
    title: 'My title',
    author: 'Salva'
};


const books : Book[] = [];


function getBook() : Book {
    return {id: 1, title: 'My title', author: 'Salva'};
};

const myBook = getBook();


function createBook( book: Book) : Book {
    return book;
};

const newBook : Book = {
    id: 1, 
    title: 'My title', 
    author: 'Salva',
    coAuthor: 'Mari Paz'
};
createBook(newBook);


// implements | extends

interface Person {
    id : number;
    name: string;
}

interface Employee extends Person {
    // id : number;
    // name: string;
    dept: string;
}

interface Customer extends Person {
    // id : number;
    // name: string;
    country: string;
}


interface Animal {
    name : string;
    getDogs : () => void;
    getCats : () => void;
}

class Zoo implements Animal {
    name = 'Pinky';
    
    getCats() : void {

    }

    getDogs() : void {

    }
}