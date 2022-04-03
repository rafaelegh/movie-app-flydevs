import { Container } from '@mui/material';
import Movies from './pages/Movies/Movies';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import ActorBio from './pages/ActorBio/ActorBio';
import { FavProvider } from './contexts/FavContext';

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
            </Routes>
          </FavProvider>
        </Container>
      </div>
    </BrowserRouter>
  );
}

export default App;
