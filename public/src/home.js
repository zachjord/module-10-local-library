const getTotalBooksCount = books => books.length;
const getTotalAccountsCount = accounts => accounts.length;

function getBooksBorrowedCount(books) {
  let bookStatus = books.filter(book => book.borrows.filter(status => status.returned === false).length > 0);
  return bookStatus.length;
}

function getMostCommonGenres(books) {
  const genreList = books.reduce((index, book)=> {
    const { genre } = book;
    !index[genre] ? index[genre] =  { name: genre, count: 1} : index[genre].count++
  return index}, {})
  return Object.values(genreList).sort((bookA, bookB) => bookB.count - bookA.count).slice(0, 5)
 }

function getMostPopularBooks(books) {
  const result = books.map(book => ({name:book.title, count:book.borrows.length}));
  return result.sort((bookA, bookB) => bookB.count - bookA.count).slice(0, 5);
}

// Creates a list of all authors then iterates through the book
// array and adds up the total number of books per author. The
// totals per author are pushed to the authorList array.
function getMostPopularAuthors(books, authors) {
  const authorList = []
  authors.forEach(author => {
    const authorName = {
      name: `${author.name.first} ${author.name.last}`,
      count: 0
     };
  books.forEach(book => {
    if(book.authorId === author.id) {
      authorName.count += book.borrows.length;
    }
    })
    authorList.push(authorName)
  })
  return authorList.sort((a, b)=> b.count - a.count).splice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
