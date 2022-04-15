import React, { useContext, useState } from 'react';

const GenresContext = React.createContext();

export function useGenresContext() {
    return useContext(GenresContext);
} 

export function GenresProvider({children}){
    const [genres, setGenres]= useState([]);

    function filterGenres(genreIds) {

        if(!genreIds || !genres) return [];
        
        const filteredGenres = genreIds.map(genreId => {
          const genreObj = genres.filter(genre => {
            return genre.id === genreId ? genre : '';
          });
          return genreObj[0];
        });
    
        //console.log(filteredGenres);
        return filteredGenres;
    }


    return(
        <GenresContext.Provider value={{filterGenres, setGenres, genres}}>
            {children}
        </GenresContext.Provider>
    )
}