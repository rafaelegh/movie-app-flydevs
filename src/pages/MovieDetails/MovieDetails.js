import './MovieDetails.css';

const MovieDetails = () => {
  return (
        <>
            <div className="trailer-container">

            </div>
            <h2 className="movie-title">Avengers: End Game</h2>
            <div className="genres"></div>
            <div className="storyline-container">
                <p className="storyline-title">Storyline</p>
                <div className="storyline">After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.</div>
            </div>
            <div className="cast-container">
                <div className="cast-title">
                    <p>Cast</p>
                    <p>See All</p>
                </div>
                <div className="cast"></div>
            </div>
        </>
    )
}

export default MovieDetails