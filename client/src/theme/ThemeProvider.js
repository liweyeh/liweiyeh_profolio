import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const themeInstance = createMuiTheme({
  palette: {
    background: {
      default: '#ab0f03'
    },
    primary: {
      main: '#ab0f03'
    },
    secondary: {
      main: '#fff'
    },
    text: {
      primary: '#000'
    },
    badges: {
      primary: "'#ab0f03'"
    }
  }
});

const Theming = props => {
  return (
    <ThemeProvider theme={themeInstance}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};

export default Theming;
