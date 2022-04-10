import { useEffect, useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import axios from "axios";
import { TextField } from "@mui/material"

const style = {
    width: '90%',
    borderRadius: '2rem',
    margin: '2.5rem 1rem 3rem'
}

const SearchBar = ({setContent}) => {

    const [searchText, setSearchText] = useState("");
    const [isSearching, setIsSearching] = useState(false);

    const fetchSearch = async () => {
        const {data} = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${
              process.env.REACT_APP_API_KEY
            }&language=en-US&page=1&query=${searchText}&include_adult=false`
        );
        console.log(data.results);
        setContent(data.results);
        setIsSearching(false);
    }

    const handleSearch = (e) => {
        if(!isSearching) {
            if(e.target.value.length > 2) {
                setIsSearching(true);
                setTimeout(() => {    
                    setSearchText(prevState => {
                        if(prevState !== e.target.value) {
                           return  e.target.value
                        }
                    }); 
                }, 2000);
            }
            else if(e.target.value.length === 0){
                setSearchText(e.target.value);
            }
        }
    }

    useEffect(() => {
        if(searchText !== '') {
            fetchSearch();
            console.log('buscando' + searchText + ' ...');
        }
        else if(searchText === ''){
            setContent([]);
        }
    }, [searchText])
    

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