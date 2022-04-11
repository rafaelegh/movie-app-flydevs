import React from 'react';
import MainInfo from '../../components/MainInfo/MainInfo';
import MinContent from '../../components/MinContent/MinContent';
import { useFavorites } from '../../contexts/FavContext';
import './Favourites.css';

const Favourites = () => {

    const {getAllFavourites} = useFavorites();
    const favourites = getAllFavourites();
    console.log(favourites)
  return (
    <div className='title-back'>
        <h2>Favourites Movies</h2>
        <div className="favourites-container">
            <div className="favourites">
                <MinContent 
/*                     id={favourites[0].id}
                    poster={favourites[0].poster}
                    rating={favourites[0].rating}
                    genres={favourites[0].genres}
                    title={favourites[0].title}
                    overview={favourites[0].overview} */
                />
                <div className="more-info">
                    <MainInfo 
                        // title={favourites[0].title}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Favourites