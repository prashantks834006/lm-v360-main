import { createTheme } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: ['GT-America', '"Segoe UI"', 'Roboto'].join(','),
  },
  palette: {
    primary: {
      main: '#456BD9',
    },
  },
});

export default theme;
