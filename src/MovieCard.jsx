const MovieCard = ({ movieData }) => {
    return (
        <>
        <div className="movie">
          <div>
            <p>{movieData.Year}</p>
          </div>
          <div>
            <img src={ movieData.Poster !== 'N/A' ? movieData.Poster : "https://demofree.sirv.com/nope-not-here.jpg"} alt={movieData.Title} />
          </div>
          <div>
            <span>{movieData.Type}</span>
            <h3>{movieData.Title}</h3>
          </div>
        </div>
        </>
    );
}
 
export default MovieCard;