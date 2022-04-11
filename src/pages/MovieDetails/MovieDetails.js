import axios from 'axios';
import { useEffect, useState } from 'react';
import { IconButton } from '@mui/material';
import {  useParams } from 'react-router-dom';
import { img_500, img_92, unavailable } from '../../components/config/config';
import GenresRating from '../../components/GenresRating/GenresRating';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../components/themes';
import { useFavorites } from '../../contexts/FavContext';
import './MovieDetails.css';
import BackButton from '../../components/BackButton/BackButton';

const MovieDetails = () => {

    const [details, setDetails] = useState([]);
    const [cast, setCast] = useState([]);
    const [seeAll, setSeeAll] = useState(false);
    const {id} = useParams();
    const idInt = id * 1;

    const backButtonStyle = { 
        width: '16px',
        position: 'absolute',
        top: '3.56rem',
        left: '3rem',
        opacity: 0.5 
    }

    const {getFavorite, updateFavorite} = useFavorites();

    let classSeeAll = seeAll ? `all-cast` : `min-cast`;


    const fetchDetails = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
        );
        console.log(data);
        setDetails(data);
    }

    const fetchCredits = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}`
        );
        console.log(data);
        setCast(data.cast);
    }

    const changeSeeAll = () => {
        setSeeAll(!seeAll);
    }

    useEffect(() => {
        fetchDetails();
        fetchCredits();
    }, []);

    return (
        <>
            <div className="trailer-container">
                <div className='layer-gradient'></div>
                <img
                    className='trailer' 
                    src={details.backdrop_path ? `${img_500}/${details.backdrop_path}` : unavailable} 
                    alt={details.title}
                />
                <PlayCircleIcon sx={{
                    fontSize: 72,
                    position: "absolute",
                    zIndex: 4,
                    bottom: "40%",
                    left: "42%"
                }}/>

                <IconButton 
                    aria-label="like"
                    size='small'
                    style={{ 
                        width: '16px',
                        position: 'absolute',
                        top: '3.56rem',
                        right: '1rem' 
                    }}
                    color='secondary'
                    onClick={() => updateFavorite(
                        idInt,
                        details.poster_path,
                        details.genres,
                        details.vote_average,
                        details.title,
                        details.overview 
                    )}
                >
                    <ThemeProvider theme={theme}>
                        {   
                            getFavorite(idInt) || false ? 
                            <FavoriteIcon color='heartFilled'/> :
                            <FavoriteIcon color='secondary'/>
                        }  
                    </ThemeProvider>
                </IconButton>
                <BackButton style={backButtonStyle} text={'back'}/>
            </div>
            <h2 className="movie-title">{details.title}</h2>

            <GenresRating size={true} genres={details.genres} rating={details.vote_average} />

            <div className="storyline-container">
                <p className="storyline-title">Storyline</p>
                <div className="storyline">{details.overview}</div>
            </div>
            <div className="cast-container">
                <div className="cast-title-container">
                    <p className='cast-title'>Cast</p>
                    <p className='see-all' onClick={changeSeeAll}>{ seeAll ? 'Hide' : 'See All'}</p>
                </div>
                <div className={`cast ${classSeeAll}`}>
                    {cast && cast.map(actor => {
                        return (
                            <div className="actor" key={actor.id}>
                                <div className="img-container">
                                    <img src={ actor.profile_path ? `${img_92}/${actor.profile_path}` : unavailable} alt="{actor.name}" />
                                </div>
                                <div className='actor-name'>{actor.name}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default MovieDetails