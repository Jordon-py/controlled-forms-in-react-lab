// src/App.jsx
import './App.css';
import BookShelf from './components/Bookshelf/BookShelf.jsx';

const App = () => {
  // If you need to log for debugging, do it outside of the return block.
  console.log(BookShelf);

  return (
    <>
      <h1>My Bookshelf</h1>
      <BookShelf /> {/* Correctly rendering the BookShelf component */}
    </>
  );
};

export default App;
