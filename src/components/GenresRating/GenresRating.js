import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { styled } from '@mui/material/styles';
import { Rating } from '@mui/material';
import './GenresRating.css'

const GenresRating = ({size, genres, rating}) => {

    const StyledRating = styled(Rating) ({
        '& .MuiRating-iconFilled': {
            color: '#FF3365',
        },
        '& .MuiRating-iconEmpty': {
            color: '#6D6D80',
        },
    });

    const joinGenres = (genresArray) => {
        if(!genresArray || genresArray[0] === undefined) return [];

        const extractedGenres = genresArray.map(genre => genre.name ? genre.name : genre);
        const limitedGenres = extractedGenres.length > 3 ? extractedGenres.splice(0, 3) : extractedGenres;
        return limitedGenres.reduce((acc, cur) => acc + ', ' + cur);
    }

    let classSize = size ? 'big' : 'small';

  return (
    <div className={`other-info-container ${classSize} `}>
        <p className='genres'>{joinGenres(genres)}</p>
        <div className='rating-reviews'>
        <StyledRating
            name="customized-color"
            readOnly
            size='small'
            value={rating/2 || 0}
            icon={<StarIcon fontSize="inherit" />}
            emptyIcon={<StarIcon fontSize="inherit" />}
        />
        <p className='reviews'>98 Reviews</p>
        </div>
    </div>
  )
}

export default GenresRating