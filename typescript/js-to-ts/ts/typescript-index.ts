import { Books } from "./typescript-types.js";
import { createBook, listBooks, deleteBook } from "./typescript-utils.js";

const books: Books = [];

// ? Type Casting
const addButton = document.getElementById("addBook") as HTMLButtonElement;
const deleteButton = document.getElementById("deleteBook") as HTMLButtonElement;
const listElement = document.getElementById("bookList") as HTMLOListElement;
const titleInput = document.getElementById("title") as HTMLInputElement;
const authorInput = document.getElementById("author") as HTMLInputElement;
const deleteTitleInput = document.getElementById(
  "deleteTitle"
) as HTMLInputElement;

if (addButton && titleInput && authorInput) {
  addButton.addEventListener("click", () => {
    const title = titleInput.value;
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
