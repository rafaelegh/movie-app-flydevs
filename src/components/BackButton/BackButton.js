import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../components/themes';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const BackButton = () => {

    let navigate = useNavigate();
    const goToMoviePage = () => navigate(`/movies`);

  return (
    <ThemeProvider theme={theme}>
        <IconButton
            aria-label="like"
            size='small'
            style={{ 
                width: '16px',
                position: 'absolute',
                top: '3.56rem',
                left: '3rem',
                opacity: 0.5 
            }}
            color='secondary'
            onClick={goToMoviePage}
        >   
            <ArrowBackIosIcon />
            Back
        </IconButton>
    </ThemeProvider>
  )
}

export default BackButton