import { useState } from "react";
import "./App.css";
import searchIcon from "./search.svg";
import MovieCard from "./MovieCard";
const API_URL = "https://www.omdbapi.com/?i=tt3896198&apikey=c46396fe";

function App() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [animatation, setAnimation] = useState(false);

  const searchMovies = async (title) => {
    const responce = await fetch(`${API_URL}&s=${title}`);
    const data = await responce.json();
    setAnimation(true);
    setMovies(data.Search);
    setTimeout(() => setAnimation(false), 2000);
  };

  const Empty = () => {
    return (
      <div className="empty">
        <h2>No Movie Found! </h2>
      </div>
    );
  };

  return (
    <div className="app">
      <h1>Movie React Gold</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search movie..."
          onChange={(e) => setQuery(e.target.value) }
        />
        <img src={searchIcon} alt="" onClick={() => {
          searchMovies(query);
          }} />
      </div>

      <div className={`container ${animatation? 'animation' : ''}`}>
      {movies.length > 0 ? (movies.map(movie => (<MovieCard movieData={movie} />))) : (<Empty />)}
      </div>

    </div>
  );
}

export default App;
