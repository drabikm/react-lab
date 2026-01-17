import './App.css';
import "milligram";
import MovieForm from "./MovieForm";
import MoviesList from "./MoviesList";
import { useState } from 'react';

function App() {
  const [movies, setMovies] = useState([
    {title: "Django Unchained", year: 1999}, 
    {title: "Titanic", year: "1987"}, 
    {title: "Notebook", year: "1765"}]);

  return (
    <div className="App" className="container">
      <MoviesList movies={movies}/>
      <h2>Time to add new movie!</h2>
      <MovieForm onMovieSubmit={(movie) => setMovies([...movies, movie])} textvalueIWant="I just want to check it"/>
    </div>
  );
}

export default App;