import './SingleContent.css'
import FavoriteIcon from '@mui/icons-material/Favorite';
import poster from './../../img/avengers.png'
import { IconButton, Rating } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react';
import { ThemeProvider, styled } from '@mui/material/styles';
import theme from '../themes';

const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#FF3365',
  },
  '& .MuiRating-iconEmpty': {
    color: '#6D6D80',
  },
});

const SingleContent = () => {

  const [liked, setLiked] = useState(false);


  const toggleLik = () => {
    setLiked(!liked);
  }

  return (
    <div className="SingleContent">
      <div className='poster-container'>
        <img
            className='poster' 
            src={poster} 
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


        <div className='other-info-container'>
          <p className='genres'>Action, Adventure, Drama</p>
          <div className='rating-reviews'>
            <StyledRating
              name="customized-color"
              readOnly
              size='small'
              defaultValue={2}
              icon={<StarIcon fontSize="inherit" />}
              emptyIcon={<StarIcon fontSize="inherit" />}
            />
            <p className='reviews'>98 Reviews</p>
          </div>
        </div>
      </div>
        
        <b className="title">Avengers: End Game</b>
        <p className="duration">137 min</p>
    </div>
  )
}

export default SingleContent