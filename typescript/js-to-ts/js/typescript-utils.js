export function createBook(title, author) {
    return { title, author };
}
export function listBooks(books) {
    return books
        .map(book => `<li>${book.title} by ${book.author}</li>`)
        .join("\n");
}
export function deleteBook(books, title) {
    const index = books.findIndex(book => book.title === title);
    if (index !== -1) {
        books.splice(index, 1);
        return true;
    }
    return false;
}
//# sourceMappingURL=typescript-utils.js.map