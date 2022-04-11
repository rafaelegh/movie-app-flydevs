import {React, useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useGotoFavouritesPage, useGotoMoviesPage } from '../../hooks/useGoToPage';
import HomeIcon from '@mui/icons-material/Home';


export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);
  const goToMoviePage = useGotoMoviesPage();
  const goToFavouritesPage = useGotoFavouritesPage();

  useEffect(() => {
    if(value === 0) goToMoviePage();
    else if(value === 1) goToFavouritesPage();
  }, [value])

  return (
    <Box sx={{ 
        width: "100%", 
        position: "fixed",
        bottom: 0,
        zIndex: 100,
    }}>
      <BottomNavigation
        showLabels
        style={{
            backgroundColor: "#2d313a",
        }}
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction 
            label="Home" 
            icon={<HomeIcon />}
            style={{ 
              color: "white", 
              fontSize: 12

            }} 
        />

        <BottomNavigationAction 
            label="Favourites" 
            icon={<FavoriteIcon />}
            style={{ color: "white" }}
        />

      </BottomNavigation>
    </Box>
  );
}
