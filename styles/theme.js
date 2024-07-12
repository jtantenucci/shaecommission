import { responsiveFontSizes } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';

let theme = createTheme ({
  palette: {
    primary: {
      light: '#717681',
      main: '#000',
      dark: 'rgba(1, 1, 1, 0.6)',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffffff',
      main: '#ffffff',
      dark: '#DBDDE6',
      contrastText: '#212121',
    },
    tertiary: {
      light: '#ffffff',
      main: '#2c2c2c',
      dark: '#DBDDE6',
      contrastText: '#212121',
    },
    background: {
      paper: '#fff',
      default: '#fff',
    },
    action: {
      hover: '#2c2c2c',
      hoverOpacity: 0.5,
      selected: 'rgba(199, 225, 235, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(113, 118, 129, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)',
      disabledOpacity: 0.38,
      focus: '#2c2c2c',
      focusOpacity: 0.12,
      activatedOpacity: 0.24,
    }, 
    text: {
      primary: '#000000',
      secondary: '#929292'
    },
  },
    typography: {
      fontFamily: [
        'TWKLausanne-300',
        'TWKLausanne-400',
        'TWKLausanne-700',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      h1: {
        fontFamily: 'TWKLausanne-400',
        fontSize: '12rem',
        letterSpacing: "-5px"
      },
      h2: {
        fontFamily: 'TWKLausanne-400',
        fontSize: '9rem',
        letterSpacing: "-5px"
      },
      h5: {
        fontSize: '1.75rem'
      }
    },
    components: {
      MuiLink: {
        defaultProps: {
          underline: 'none',
        },
      },
      MuiToolbar: {
        defaultProps: {
          backgroundColor: 'white',
        }
      },
      MuiIconButton: {
        color: "#000"
      },
    }
});

export default responsiveFontSizes(theme);