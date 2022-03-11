import { TextField } from "@mui/material"
import { ThemeProvider } from '@mui/system';
import { createTheme } from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import SingleContent from "../../components/SingleContent/SingleContent";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Movies.css"

const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#fff"
      },
    }
});

const style = {
  width: '90%',
  borderRadius: '2rem',
  margin: '2.5rem 1rem 3rem'
}

const Movies = () => {

  const [content, setContent] = useState([]); 
  const [genres, setGenres]= useState([]);

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`
    );
    console.log(data.results);
    setContent(data.results);
  }

  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setGenres(data.genres);
    //console.log('genres: ', genres);
  }

  const filterGenres = (genreIds) => {

    if(!genreIds || !genres) return [];

    const filteredGenres = genreIds.map(genreId => {
      const genreObj = genres.filter(genre => {
        return genre.id === genreId ? genre.name : '';
      });
      return genreObj[0] ? genreObj[0].name : genreObj[0];
    });
    /*console.log('genres ids: ',genreIds);
    console.log('filtered genres: ',filteredGenres);*/
    const cleanGenres = filteredGenres.length > 3 ? filteredGenres.splice(0, 3) : filteredGenres;
    const unifiedGenres = cleanGenres.reduce((acc, cur) => acc + ', ' + cur);
    //console.log(unifiedGenres);
    
    return unifiedGenres;
  }

  useEffect(() => {
    fetchMovies();
    fetchGenres();
  },[]);

  return (
    <>
      <ThemeProvider theme={darkTheme}>
          <TextField
            style={style}
            InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
            }}
          >
          </TextField>

          <div className="Movies">
              {
                content && content.map(c => 
                  <SingleContent
                    key={c.id} 
                    id={c.id} 
                    poster={c.poster_path} 
                    title={c.title || c.name} 
                    rating={c.vote_average}
                    genres={filterGenres(c.genre_ids)} 
                  />
                )
              }
          </div>
      </ThemeProvider>
    </>
  )
}

export default Movies