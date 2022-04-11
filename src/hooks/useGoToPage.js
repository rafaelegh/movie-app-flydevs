import { useNavigate } from "react-router-dom";

function useGotoPage(page) {
    let navigate = useNavigate();
    return () => navigate(`/${page}`)
}

export function useGotoMoviesPage() {
   return useGotoPage('movies');
}

export function useGotoFavouritesPage() {
    return useGotoPage('favourites');
 }