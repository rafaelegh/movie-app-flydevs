import { useNavigate } from "react-router-dom";

function useGotoPage(page) {
    let navigate = useNavigate();
    return () => navigate(`/${page}`)
}

export function useGotoPageMovies() {
   return useGotoPage('movies');
}