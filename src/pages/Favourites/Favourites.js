import { Favorite } from '@mui/icons-material';
import React from 'react';
import BackButton from '../../components/BackButton/BackButton';
import MainInfo from '../../components/MainInfo/MainInfo';
import MinContent from '../../components/MinContent/MinContent';
import { useFavorites } from '../../contexts/FavContext';
import './Favourites.css';

const Favourites = () => {

    const {getAllFavourites} = useFavorites();
    const favourites = getAllFavourites();

    const backButtonStyle = { 
        width: '7px',
        opacity: 0.5,
        marginRight: '3rem' 
    }

    return (
      <>
        <div className='title-back'>
            <BackButton style={backButtonStyle} />
            <h2>Favourites Movies</h2>
        </div>
        <div className="favourites-container">
            {
                favourites && favourites.map(favorite => (
                    <div key={favorite.id} className="favourite">
                        <div className="min-content">
                            <MinContent 
                                id={favorite.id}
                                poster={favorite.poster}
                                rating={favorite.rating}
                                genres={favorite.genres}
                                title={favorite.title}
                                overview={favorite.overview}
                            />
                        </div>
                        <div className="more-info">
                            <div className='title-overview'>
                                <MainInfo 
                                    title={favorite.title}
                                />
                                <div className="overview">
                                    {favorite.overview}
                                </div>
                            </div>
                            <button>BOOK YOUR TICKET</button>
                        </div>
                    </div>
                ))
            }
        </div>
    </>
  )
}

export default Favourites