import FavoriteIcon from '@mui/icons-material/Favorite';
import GenresRating from '../GenresRating/GenresRating'
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../themes';
import { img_154, unavailable } from '../config/config';

import './SingleContent.css'

const SingleContent = ({poster, title, rating, genres}) => {

  const [liked, setLiked] = useState(false);

  const toggleLik = () => setLiked(!liked);

  return (
    <div>
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
          onClick={toggleLik}
        >
          <ThemeProvider theme={theme}>
            {liked ? 
              <FavoriteIcon color='heartFilled'/> :
              <FavoriteIcon color='secondary'/>
            }  
          </ThemeProvider>
        </IconButton>

        <GenresRating size={false} genres={genres} rating={rating} />

      </div>
      
      <div className='main-info'>
        <b className="title">{title}</b>
        <p className="duration">137 min</p>
      </div>
    </div>
  )
}

export default SingleContent