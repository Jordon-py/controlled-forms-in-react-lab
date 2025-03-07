import { useState } from 'react';

/*
3. Create Event Handlers

a. handleInputChange
Purpose: Update the newBook state as the user types.

Define a function named handleInputChange.
Accept an event object (e) that contains the name of the input field and its new value.
Construct a new copy of the newBook object and update only the field corresponding to the input’s name. (Use the spread operator to preserve other fields.)
Call setNewBook with this updated object to change the state.
b. handleSubmit
Purpose: Handle form submission by adding a new book to the list, then resetting the input fields.

Define a function named handleSubmit.
Accept an event object (e), and use e.preventDefault() to stop the default form behavior.
Call setBooks  to add the newBook object to your existing books array state. (Again, use the spread operator to copy the existing array.)
Reset the newBook object to its initial empty state, clearing the form fields for the next entry.

 */


export default function BookShelf() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });

  //use the "name" attribute instead of "className"
  function handleInputChange(e) {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  }

  // Moved out of handleInputChange 
  function handleSubmit(e) {
    e.preventDefault();
    setBooks((prevBooks) => [...prevBooks, newBook]);
    setNewBook({ title: '', author: '' }); // Reset form fields
  }

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book!</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Title:
            <input
              type="text"
              name="title" // Use "name" attribute for identification
              value={newBook.title}
              onChange={handleInputChange} // Pass function reference
            />
          </label>
          <br />
          <label>
            Author:
            <input
              type="text"
              name="author"
              value={newBook.author}
              onChange={handleInputChange}
            />
          </label>
          <br />
          <button type="submit">
            <em>Add Book</em>
          </button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
          <div key={index}>
            <p>
              <strong>Title:</strong> {book.title}
            </p>
            <p>
              <strong>Author:</strong> {book.author}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
