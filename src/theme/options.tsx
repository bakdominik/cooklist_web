import { ThemeOptions } from '@material-ui/core/styles';

export default {
  palette: {
    type: 'light',
    primary: {
      main: '#161211',
    },
    secondary: {
      main: '#F5BDB6',
    },
    background: {
      default: '#fdfcfc',
    },
    error: {
      main: '#ff4343',
    },
    info: {
      main: '#F1C40F',
    },
    text: {
      primary: '#161211',
      hint: '#6b5b5b',
      secondary: '#55504D',
    },
    warning: {
      main: '#7B7FC5',
    },
    success: {
      main: '#248232',
    },
  },
  typography: {
    fontFamily: 'Lato',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 600,
    },
    fontWeightRegular: 400,
    h4: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      fontWeight: 400,
    },
    fontWeightMedium: 600,
  },
  shape: {
    borderRadius: 15,
  },
  props: {
    MuiAppBar: {
      color: 'transparent',
    },
  },
} as ThemeOptions;