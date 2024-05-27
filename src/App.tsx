import React from 'react';
import Header from './components/layout/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import styled, { createGlobalStyle } from 'styled-components';
import Title from './components/layout/Title';
import SocialLink from './components/layout/SocialLink';
import { Box, Container } from '@mui/material';
import Footer from './components/layout/Footer';

const Body = createGlobalStyle`
  body {
    background-color: #ecece7;
    height: 100vh;
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

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ display: 'flex', flexDirection: 'column', maxHeight: '100vh' }}>
        <Header />
        <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '90vh' }}>
          <Title />
          <SocialLink />
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;