const findAccountById = (accounts, id) => accounts.find(account => account.id === id);

function sortAccountsByLastName(accounts) {
  return accounts.sort((accA, accB) => accA.name.last.toLowerCase() > accB.name.last.toLowerCase() ? 1 : -1);
}

const getBooksBorrowedByAccount = (account, books) => books.filter(book => book.borrows.some(bookId => bookId.id === account.id));
const getTotalNumberOfBorrows = (account, books) => getBooksBorrowedByAccount(account, books).length;

// The "books" array is filtered with the results from the matched
// borrower and account id that is still checked out.
// A new array is mapped to include the mathed author object.
function getBooksPossessedByAccount(account, books, authors) {
  return books.filter(book => book.borrows.find(borrower => borrower.id === account.id && !borrower.returned))
  .map(book => { const author = authors.find(author => author.id === book.authorId)
      book.author = author; 
      return book;});  
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
