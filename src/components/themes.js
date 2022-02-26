import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
      primary: {
          main: '#000'
      },
      secondary: {
        main: '#fff'
      },
      heartFilled: {
        main: '#FF4D79'
      },
      heartEmpty: {
          main: '#FFF'
      }
    },
  });

export default theme;