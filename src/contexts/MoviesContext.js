import React, { useContext, useState } from 'react';

const MoviesContext = React.createContext();

export function useMoviesContext() {
    return useContext(MoviesContext);
} 

export function MoviesProvider({children}) {
    const [movies, setMovies] = useState([]);

    function getAllMovies() {
        return movies;
    }

    function getMovie(id){
        return movies.find(movie => movie.id === id);
    }

    return(
        <MoviesContext.Provider value={{getAllMovies, setMovies, getMovie}}>
            {children}
        </MoviesContext.Provider>
    )
}