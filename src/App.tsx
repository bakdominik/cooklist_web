import React from 'react';

import {Checkbox, ThemeProvider} from '@material-ui/core';

import theme from "./theme"

const App: React.VFC = () => (
  <ThemeProvider theme={theme}>
    <Checkbox />
  </ThemeProvider>
);

export default App;
