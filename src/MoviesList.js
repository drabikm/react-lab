export default function MoviesList(props) {
    return <><h1>My Favourite Movies :)</h1><ul>
        {props.movies.map((movie) => <li key={movie.title}>{movie.title} ({movie.year})</li>)}
    </ul></>;
};