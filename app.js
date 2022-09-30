class Book {

    constructor(title, author, read) {
        this.title = title;
        this.author = author;
        this.read = read;
    }

    getTitle() {
        return this.title;
    }


}
class Library {
    constructor(books, bookCount) {
        this.books = books;
        this.bookCount = bookCount;
    }
}

const book = new Book("title", "author", false);

const books = []
const library = new Library(books, books.length);

function addnewBook() {
    //get a element input hmtl and save into the var title, author and read;
    //then add it to the library with push method 

    let book = new Book(title, author, read);
    library.books.push(book);
}
console.log(library.books);

