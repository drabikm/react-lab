import {useState} from "react";

export default function MovieForm(props) {
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');

    function addMovie(event) {
        event.preventDefault();
        if (title.length < 5 || title.length > 30) {
           return alert("Nie podoba mi sie tytul filmu. Wez cos z nim zrob!");
        }
        props.onMovieSubmit({title, year});
        setTitle('');
        setYear('');
      }

    return <form onSubmit={(event) => addMovie(event) }>
                <div>Wpisz prosze tytul filmu</div>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}></input>
                <div>... i nastepnie rok produkcji (nie musi byc prawdziwa)</div>
                <input type="text" value={year} onChange={(event) => setYear(event.target.value)}></input>
                <button>Dodaj film</button>
                <div>{props.textvalueIWant}</div>
           </form>;
}