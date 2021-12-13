//Your theme for the new stuff using material UI has been copied here so it doesn't conflict
import { createMuiTheme } from '@material-ui/core/styles';

const newTheme = createMuiTheme({
  palette: {
    type: 'dark',
    text: {
      primary: '#FFF',
    },
    background: {
      default: '#ffffff',
      paper: 'rgba(255, 255, 255, 0.9)',
    },
    primary: {
      light: '#4BACDE',
      main: '#044878',
      dark: '#092E48',
      contrastText: '#000',
    },
    secondary: {
      light: '#4BACDE',
      main: '#044878',
      dark: '#092E48',
      contrastText: '#000',
    },
    action: {
      disabledBackground: '#CDCDCD',
      active: '#000',
      hover: '#000',
    },
  },
  typography: {
    color: '#044878',
    fontFamily: ['"Roadex Pro"', 'sans-serif'].join(','),
  },
});

export default newTheme;
