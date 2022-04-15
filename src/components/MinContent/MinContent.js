import FavoriteIcon from '@mui/icons-material/Favorite';
import GenresRating from '../GenresRating/GenresRating'
import { IconButton } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes';
import { img_154, unavailable } from '../config/config';
import { useFavorites } from '../../contexts/FavContext';
import './MinContent.css';
import { useMoviesContext } from '../../contexts/MoviesContext';
import { useGenresContext } from '../../contexts/GenresContext';

const styleLikedButton = { 
    width: '16px',
    position: 'absolute',
    top: '0',
    right: '6px' 
}

const MinContent = ({id}) => {

    const {getFavorite, updateFavorite} = useFavorites();
    const {getMovie} = useMoviesContext();
    const {filterGenres} = useGenresContext();
    const {
        poster_path: poster, 
        vote_average: rating, 
        genre_ids: genres, 
        title, 
        overview
    } = getMovie(id);
    
    const filteredGenres = filterGenres(genres);
    const handleLiked = () => {
        updateFavorite(poster, rating, filteredGenres, title, overview);
    }

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
                onClick={() => handleLiked()}
            >
                <ThemeProvider theme={theme}>
                    {   
                        (getFavorite(id) || false) ? 
                            <FavoriteIcon color='heartFilled'/> :
                            <FavoriteIcon color='secondary'/>
                    }  
                </ThemeProvider>
            </IconButton>
            <GenresRating size={false} genres={filteredGenres} rating={rating} />
        </div>
    )
}

export default MinContent