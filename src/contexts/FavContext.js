import React, { useContext, useState } from 'react';

const FavContext = React.createContext();

export function useFavorites() {
    return useContext(FavContext);
}

export function FavProvider({children}) {
    const [favorites, setFavorites] = useState([]);
    
    function getFavorite(id) {
        const objFound = favorites.find((el) => el.id === id);
        
        return !!objFound ? objFound.liked : null;
    }

    function getAllFavourites() {
        return favorites;
    }
    
    function updateFavorite(id, poster, genres, rating,title, overview) {
      
        const indexFound = favorites.findIndex(el => el.id === id);

        if(indexFound !== -1) {
            setFavorites( prevFavList => [
                ...prevFavList.slice(0, indexFound),
                {
                    id, 
                    liked: !prevFavList[indexFound].liked,
                    poster,
                    genres,
                    rating,
                    title,
                    overview
                },
                ...prevFavList.slice(indexFound + 1)
            ]);
        }
        else {
            setFavorites( prevFavList => [...prevFavList, {
                id, 
                liked: true,
                poster,
                genres,
                rating,
                title,
                overview
            }] );
        }
    }


    return(
        <FavContext.Provider value={{
            getFavorite, 
            updateFavorite,
            getAllFavourites
        }}>
            {children}  
        </FavContext.Provider>
    )
}