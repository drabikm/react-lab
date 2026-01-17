import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import "milligram";
import MovieForm from "./MovieForm";

function App() {
  const [title, setTitle] = useState('Titanic');
  const movies = [{title: "Django Unchained"}, {title: "Titanic"}, {title: "Notebook"}];
  //const [movies, setMovies] = useState([]);

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

  function a() {
    alert.message("No i masz {title}")
  }

  return (
    <div className="App" class="container">
      <h1>My Favourite Movies :)</h1>
      <ul>
        {movies.map((movie) => <li key={movie.title}>{movie.title}</li>)}
      </ul>
      {
        title.length > 0 && <div>{message}</div>
      }
      <input type="text" value={title} onChange={handleChange}></input>
      <button tyep="button" onClick={() => alert(title)}>Pokaz no mi tytul</button>
      <h2>Time to add new movie!</h2>

    </div>
  );
}

export default App;
