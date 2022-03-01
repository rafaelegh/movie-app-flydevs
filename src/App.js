import { Container } from '@mui/material';
import Movies from './components/Movies/Movies';
import './App.css';

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
