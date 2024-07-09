let books = [];
const deleteBtn = document.getElementById("deleteBtn");
const booksTable = document.getElementById("books");

function deleteBtnMode() {
  if (books.length >= 1) {
    deleteBtn.disabled = false;
    booksTable.style.display = "block";
  } else {
    deleteBtn.disabled = true;
    booksTable.style.display = "none";
  }
}

function addBook() {
  const bookName = document.getElementById("bookName").value;
  const authorName = document.getElementById("authorName").value;
  const bookDescription = document.getElementById("bookDescription").value;
  const pagesNumber = parseInt(document.getElementById("pagesNumber").value);
  if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
    const book = {
      name: bookName,
      authorName: authorName,
      bookDescription: bookDescription,
      pagesNumber: pagesNumber,
    };
    books.push(book);
    showbooks();
    clearInputs();
    deleteBtnMode();
  } else {
    alert("Please fill in all fields correctly.");
  }
}

function deleteBook() {
  const bookName = document.getElementById("bookName").value;
  console.log(bookName);
  let bookIndex = -1;
  books.forEach((book, index) => {
    if (book.name === bookName) {
      bookIndex = index;
    }
  });
  console.log(bookIndex);
  if (bookIndex !== -1) {
    books.splice(bookIndex, 1);
    showbooks();
  } else {
    alert("Book not found. Unable to delete.");
  }
  clearInputs();
  deleteBtnMode();
}

function showbooks() {
  const bookDiv = books.map(
    (book, index) =>
      `<tr id=${book.name}>
            <td>${index + 1}</td>
            <td>${book.name}</td>
            <td>${book.authorName}</td>
            <td>${book.bookDescription}</td>
            <td>${book.pagesNumber} </td>
        </tr>`
  );
  document.getElementById("booksDetails").innerHTML = bookDiv.join(" ");
}

function clearInputs() {
  document.getElementById("bookName").value = "";
  document.getElementById("authorName").value = "";
  document.getElementById("bookDescription").value = "";
  document.getElementById("pagesNumber").value = "";
}
