/* Неверный вариант. Нарушается принцип единственной ответственности так как в одном классе используется метод как для получения имени книги, так и для сохранения имени книги в базу данных. */

class Book {
    constructor (name) {
        this.name = name;
    }

    getBookName() {
        console.log(this.name) ;
    }

    saveBookName(){
        /* Saves book names */
    }
}

const a = new Book ('Crime and Justice');

console.log (a.getBookName());

/* Верный вариант. Принцип единственной ответственности соблюдается. Метод для сохранения имени книги выносится в отдельный класс */

class Book {
    constructor (name) {
        this.name = name;
    }

    getBookName() {
        console.log(this.name) ;
    }
}

class BookNames {
    saveBookName(){
        /* Saves book names */
    }
}

const b = new Book ('Crime and Justice');

console.log (b.getBookName());
