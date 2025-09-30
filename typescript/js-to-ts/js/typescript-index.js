import { createBook, listBooks, deleteBook } from "./typescript-utils.js";
const books = [];
// ? Type Casting
const addButton = document.getElementById("addBook");
const deleteButton = document.getElementById("deleteBook");
const listElement = document.getElementById("bookList");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const deleteTitleInput = document.getElementById("deleteTitle");
if (addButton && titleInput && authorInput) {
    addButton.addEventListener("click", () => {
        const title = titleInput.value;
        const author = authorInput.value;
        if (title && author) {
            books.push(createBook(title, author));
            updateBookList();
        }
        else {
            alert("Please provide both title and author!");
        }
    });
}
if (deleteButton && deleteTitleInput) {
    deleteButton.addEventListener("click", () => {
        const title = deleteTitleInput.value;
        if (title && deleteBook(books, title)) {
            updateBookList();
        }
        else {
            alert(`Book with title "${title}" not found.`);
        }
    });
}
function updateBookList() {
    if (listElement) {
        listElement.innerHTML = listBooks(books).replace(/\n/g, "<br>");
    }
}
//# sourceMappingURL=typescript-index.js.map