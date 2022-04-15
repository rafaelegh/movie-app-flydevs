import React from 'react';
import { FavProvider} from './FavContext';
import { GenresProvider } from './GenresContext';
import { MoviesProvider } from './MoviesContext';


export function FullProvider({children}) {

    return(
        <FavProvider>
            <GenresProvider>
                <MoviesProvider>
                    {children}
                </MoviesProvider>
            </GenresProvider>
        </FavProvider>
    );
}