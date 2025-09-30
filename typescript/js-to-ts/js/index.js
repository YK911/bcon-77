import { createBook, listBooks, deleteBook } from "./utils.js";

const books = [];
const addButton = document.getElementById("addBook");
const deleteButton = document.getElementById("deleteBook");
const listElement = document.getElementById("bookList");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const deleteTitleInput = document.getElementById("deleteTitle");

if (addButton && titleInput && authorInput) {
  addButton.addEventListener("click", () => {
    const title = titleInput.value; // Type assertion, change to typeguard (and the same for the other type assertions in this file)
    const author = authorInput.value;
    if (title && author) {
      books.push(createBook(title, author));
      updateBookList();
    } else {
      alert("Please provide both title and author!");
    }
  });
}
if (deleteButton && deleteTitleInput) {
  deleteButton.addEventListener("click", () => {
    const title = deleteTitleInput.value;
    if (title && deleteBook(books, title)) {
      updateBookList();
    } else {
      alert(`Book with title "${title}" not found.`);
    }
  });
}
function updateBookList() {
  if (listElement) {
    listElement.innerHTML = listBooks(books).replace(/\n/g, "<br>");
  }
}
