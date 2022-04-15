import { Container } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from './pages/Movies/Movies';
import MovieDetails from './pages/MovieDetails/MovieDetails';
import ActorBio from './pages/ActorBio/ActorBio';
import Favourites from './pages/Favourites/Favourites';
import SimpleBottomNavigation from './components/MainNav/MainNav';
import { FullProvider } from './contexts/FullContext';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Container>
          <FullProvider>
              <Routes>
                <Route path='/' element={<Movies />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/movies/:id' element={<MovieDetails />} />
                <Route path='/actorbio/:id' element={<ActorBio />} />
                <Route path='/favourites' element={<Favourites />} />
              </Routes>
            </FullProvider>
        </Container>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
