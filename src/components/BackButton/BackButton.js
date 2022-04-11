import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../components/themes';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const BackButton = ({style, text}) => {

    let navigate = useNavigate();
    const goToMoviePage = () => {
        navigate(`/movies`);
        console.log('hola')
    }

  return (
    <ThemeProvider theme={theme}>
        <IconButton
            aria-label="like"
            size='small'
            style={style}
            color='secondary'
            onClick={goToMoviePage}
        >   
            <ArrowBackIosIcon />
            {!!text ? text : ''}
        </IconButton>
    </ThemeProvider>
  )
}

export default BackButton