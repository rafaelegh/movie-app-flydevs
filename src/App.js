import { Container } from '@mui/material';
import './App.css';
import Movies from './components/Movies/Movies';

function App() {
  return (
    <div className="App">
      <Container>
        <Movies />
      </Container>
    </div>
  );
}

export default App;
