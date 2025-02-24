// src/App.jsx

const App = () => {
  const [title, setTitle] = useState('The full name will appear here.');
  const [firstName, setFirstName] = useState('');

  // when invoked, update the firstName state to equal the new value 
  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  return (
    <>
      <h2>{title}</h2>
      <form>
        <label htmlFor="firstName">First Name: </label>
        <input
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </form>
    </>
  );
};

