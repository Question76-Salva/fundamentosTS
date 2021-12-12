"use strict";
//* =================
//* === interface ===
//* =================
const book = {
    id: 1,
    title: 'My title',
    author: 'Salva'
};
const books = [];
function getBook() {
    return { id: 1, title: 'My title', author: 'Salva' };
}
;
const myBook = getBook();
function createBook(book) {
    return book;
}
;
const newBook = {
    id: 1,
    title: 'My title',
    author: 'Salva',
    coAuthor: 'Mari Paz'
};
createBook(newBook);
class Zoo {
    constructor() {
        this.name = 'Pinky';
    }
    getCats() {
    }
    getDogs() {
    }
}
