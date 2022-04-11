import { IconButton } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../../components/themes';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useGotoMoviesPage } from '../../hooks/useGoToPage';

const BackButton = ({style, text}) => {

    const goToMoviePage = useGotoMoviesPage();

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
    );
}

export default BackButton