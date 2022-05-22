const findAuthorById = (authors, id) => authors.find(author => author.id === id);
const findBookById = (books, id) => books.find(book => book.id === id);

// The books array is filtered into two seperate arrays based on returned status.
// The two arrays are returned in a single array.
function partitionBooksByBorrowedStatus(books) {
  const booksOut = books.filter(book=> book.borrows[0].returned == false);
  const booksIn = books.filter(book => book.borrows[0].returned == true);
  return [booksOut, booksIn];
}

// The inner find() method creates an array of all accounts whose ids match
// that of the borrower ids that were mapped from the "book.borrows" array
// inside the book object. A "returned: value" key is added to each object in
//the "matched" array. The "borrowerList" is returned sliced.
function getBorrowersForBook(book, accounts) {
  const borrowerList = book.borrows.map(borrower => {
    const matched = accounts.find(account => borrower.id === account.id)
    matched.returned = borrower.returned;
    return matched;
  });
return borrowerList.slice(0,10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
