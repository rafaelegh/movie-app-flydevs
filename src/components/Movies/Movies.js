import { TextField } from "@mui/material"
import { ThemeProvider } from '@mui/system';
import {  createTheme } from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import SingleContent from "../SingleContent/SingleContent";


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
                <SingleContent />
            </div>
        </ThemeProvider>
    </>
  )
}

export default Movies