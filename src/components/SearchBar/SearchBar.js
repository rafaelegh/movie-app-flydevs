import { useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import axios from "axios";
import { TextField } from "@mui/material"

const style = {
    width: '90%',
    borderRadius: '2rem',
    margin: '2.5rem 1rem 3rem'
}

const SearchBar = () => {

    const [content, setContent] = useState();
    const[searchText, setSearchText] = useState("");

    const fetchSearch = async () => {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${
              process.env.REACT_APP_API_KEY
            }&language=en-US&page=1&query=${searchText}&include_adult=false`
        );
        console.log(data.results);
        setContent(data.results);
    }

    const handleSearch = (e) => {
        setTimeout(() => {
            if(e.target.value.length > 2){
                setSearchText(e.target.value.length);
                fetchSearch();
            }
        }, 1000);
    }
    

  return (
    <TextField
        style={style}
        InputProps={{
            endAdornment: (
            <InputAdornment position="end">
                <SearchIcon />
            </InputAdornment>
            ),
        }}
        onChange={(e) => handleSearch(e)}
    >
    </TextField>
  )
}

export default SearchBar