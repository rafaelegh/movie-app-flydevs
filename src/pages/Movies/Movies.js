import { Link } from "react-router-dom";
import { ThemeProvider } from '@mui/system';
import { createTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import SearchBar from '../../components/SearchBar/SearchBar';
import SingleContent from "../../components/SingleContent/SingleContent";
import axios from "axios";
import "./Movies.css"
import { useMoviesContext } from "../../contexts/MoviesContext";
import { useGenresContext } from "../../contexts/GenresContext";

const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff"
      },
    }
});

const Movies = () => {

  const {genres, setGenres} = useGenresContext();
  const {getAllMovies ,setMovies} = useMoviesContext();
  const movies = getAllMovies();

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
    );
    console.log(data.results);
    setMovies(data.results);
  }

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
    //console.log('genres: ', genres);
  }

  useEffect(() => {
    if(movies.length === 0) {
      fetchMovies();
    }
    if(genres.length === 0) {
      fetchGenres();
    }
  },[movies]);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <SearchBar setContent={setMovies} />
        <div className="Movies">
            {
              movies && movies.map(c => 
                <Link 
                  key={c.id} 
                  className="SingleContent" 
                  to={`/movies/${c.id}`}
                >
                  <SingleContent
                    id={c.id}
                    title={c.title || c.name}  
                  />                  
                </Link>
              )
            }
        </div>
      </ThemeProvider>
    </>
  )
}

export default Movies