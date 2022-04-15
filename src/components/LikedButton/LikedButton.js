import { IconButton } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import theme from '../themes';

const LikedButton = ({updateFavorite, styleLikedButton}) => {
  return (
    <IconButton 
        aria-label="like"
        size='small'
        style={styleLikedButton}
        color='secondary'
        onClick={updateFavorite}
    >
        <ThemeProvider theme={theme}>
            {   
                (getFavorite(id) || false) ? 
                    <FavoriteIcon color='heartFilled'/> :
                    <FavoriteIcon color='secondary'/>
            }  
        </ThemeProvider>
    </IconButton>
  )
}

export default LikedButton