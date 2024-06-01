import React, { useEffect, useState } from 'react';
import Header from './components/layout/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import styled, { createGlobalStyle } from 'styled-components';
import { Box, CircularProgress, Container } from '@mui/material';
import Footer from './components/layout/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/layout/Profile';
import Skill from './components/layout/Skill';
import Contact from './components/layout/Contact';
import Home from './components/layout/Home';

const Body = createGlobalStyle`
  body {
    background-color: #ecece7;
    min-height: 100vh;
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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename="/MyPortfolio">
        <Body />
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
          <Header />
          <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', flexGrow: 1, maxWidth: 'none' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/skill" element={<Skill />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Container>
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;