const myLibrary = [];

let Book = function(title,author,pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

let theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', '295 pages')

function addBookToLibrary(book) {
    myLibrary.push(book)
}

addBookToLibrary(theHobbit)
console.log(myLibrary[0].title)

