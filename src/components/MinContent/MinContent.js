import FavoriteIcon from '@mui/icons-material/Favorite';
import GenresRating from '../GenresRating/GenresRating'
import { IconButton } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes';
import { img_154, unavailable } from '../config/config';
import { useFavorites } from '../../contexts/FavContext';
import './MinContent.css';

const MinContent = ({id, poster, rating, genres, title, overview}) => {

    const {getFavorite, updateFavorite} = useFavorites();

  return (
        <div className='poster-container'>
            <div className='layer-gradient'></div>
            <img
                className='poster' 
                src={poster ? `${img_154}/${poster}` : unavailable} 
                alt=""
            />
            <div className="mpa">13+</div>
            <IconButton 
                aria-label="like"
                size='small'
                style={{ 
                    width: '16px',
                    position: 'absolute',
                    top: '0',
                    right: '6px' 
                }}
                color='secondary'
                onClick={() => updateFavorite(id, poster, genres, rating,title, overview)}
            >
                <ThemeProvider theme={theme}>
                    {   
                        (getFavorite(id) || false) ? 
                            <FavoriteIcon color='heartFilled'/> :
                            <FavoriteIcon color='secondary'/>
                    }  
                </ThemeProvider>
            </IconButton>
            <GenresRating size={false} genres={genres} rating={rating} />
        </div>
    )
}

export default MinContent