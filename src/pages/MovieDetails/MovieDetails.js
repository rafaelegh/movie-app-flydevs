import axios from 'axios';
import { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useParams } from 'react-router-dom';
import { img_500, img_92, unavailable } from '../../components/config/config';
import GenresRating from '../../components/GenresRating/GenresRating';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import './MovieDetails.css';

const MovieDetails = () => {

    const [details, setDetails] = useState([]);
    const [cast, setCast] = useState([]);
    const [videos, setVideos] = useState([]);
    const [seeAll, setSeeAll] = useState(false);
    const {id} = useParams();

    let classSeeAll = seeAll ? `all-cast` : `min-cast`;

    const fetchDetails = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`
        );
        console.log(data);
        setDetails(data);
    }

    const fetchVideos = async () => {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}`
        );
        console.log(data);
        setVideos(data.results);
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
        fetchVideos();
        fetchCredits();
    }, []);

    return (
        <>
            <div className="trailer-container">
                <img
                    className='trailer' 
                    src={details.backdrop_path ? `${img_500}/${details.backdrop_path}` : unavailable} 
                    alt={details.title}
                />
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