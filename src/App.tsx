import React from 'react';
import Header from './components/layout/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import styled, { createGlobalStyle } from 'styled-components';
import Title from './components/layout/Title';

const Body = createGlobalStyle`
  body {
    background-color: #ecece7;
  }
`

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      md: 768,
      lg: 1025,
      xl: 1536,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Body />
      <Header />
      <Title />
    </ThemeProvider>
  );
}

export default App;