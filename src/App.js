import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import MovieForm from "./MovieForm";

function App() {
  const [title, setTitle] = useState('Titanic');
  const [movies, setMovies] = useState([
    {title: "Django Unchained", year: 1999}, 
    {title: "Titanic", year: "1987"}, 
    {title: "Notebook", year: "1765"}]);
  const [title_to_add, setTitle_to_add] = useState('');
  const [year, setYear] = useState('');

  let message;

  function handleChange(event) {
    setTitle(event.target.value);
  }

  if (title.length < 7) {
    message = "za krotki, musisz cos dopisac"
  } else if (title.length < 15) {
    message = "Brawo Ty!"
  } else {
    message = "za dlugi, nie zadziala :D"
  }

  function addMovie(event) {
    event.preventDefault();
    setMovies([...movies, {title, year}]);
  }

  return (
    <div className="App" className="container">
      <h1>My Favourite Movies :)</h1>
      <ul>
        {movies.map((movie) => <li key={movie.title}>{movie.title} ({movie.year})</li>)}
      </ul>
      {
        title.length > 0 && <div>{message}</div>
      }
      <input type="text" value={title} onChange={handleChange}></input>
      <button type="button" onClick={() => alert(title)}>Pokaz no mi tytul</button>
      <h2>Time to add new movie!</h2>
      <form onSubmit={(event) => addMovie(event) }>
        <div>Wpisz prosze tytul filmu</div>
        <input type="text" value={title_to_add} onChange={(event) => setTitle_to_add(event.target.value)}></input>
        <div>... i nastepnie rok produkcji (nie musi byc prawdziwa)</div>
        <input type="text" value={year} onChange={(event) => setYear(event.target.value)}></input>
        <button>Dodaj film</button>
      </form>
    </div>
  );
}

export default App;