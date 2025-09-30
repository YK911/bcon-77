import { Book, Books } from "./typescript-types";

export function createBook(title: string, author: string): Book {
  return { title, author };
}

export function listBooks(books: Books): string {
  return books
    .map(book => `<li>${book.title} by ${book.author}</li>`)
    .join("\n");
}

export function deleteBook(books: Books, title: string): boolean {
  const index = books.findIndex(book => book.title === title);
  if (index !== -1) {
    books.splice(index, 1);
    return true;
  }
  return false;
}
