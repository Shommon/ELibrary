const dialog = document.getElementById("addbookdialog");
const closeBtn = dialog.querySelector("#close");


const myLibrary = [];

function showDialog() {
    dialog.style.display = 'flex';
    dialog.showModal();

}

closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    dialog.style.display = 'none';
    dialog.close();
})


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



