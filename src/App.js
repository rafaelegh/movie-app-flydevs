import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FavProvider } from './contexts/FavContext';
import Movies from './pages/Movies/Movies';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import ActorBio from './pages/ActorBio/ActorBio';
import Favourites from './pages/Favourites/Favourites';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          <FavProvider>
            <Routes>
              <Route path='/' element={<Movies />} />
              <Route path='/movies' element={<Movies />} />
              <Route path='/movies/:id' element={<MovieDetails />} />
              <Route path='/actorbio/:id' element={<ActorBio />} />
              <Route path='/favourites' element={<Favourites />} />
            </Routes>
          </FavProvider>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
