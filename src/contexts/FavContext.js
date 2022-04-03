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
    
    function updateFavorite(id) {
      
        const indexFound = favorites.findIndex(el => el.id === id);

        if(indexFound !== -1) {
            setFavorites( prevFavList => [
                ...prevFavList.slice(0, indexFound),
                {id, liked: !prevFavList[indexFound].liked},
                ...prevFavList.slice(indexFound + 1)
            ]);
        }
        else {
            setFavorites( prevFavList => [...prevFavList, {id, liked: true}] );
        }
    }

    return(
        <FavContext.Provider value={{
            getFavorite, 
            updateFavorite
        }}>
                {children}  
        </FavContext.Provider>
    )
}