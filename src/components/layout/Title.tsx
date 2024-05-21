import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styled from 'styled-components';

const Title = () => {
  return (
    <Container maxWidth="xl" sx={{ height: '80vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Typography variant="h1" component="h1" sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '.3rem', color: '#DEB887' }}>
          Nine's Portfolio
        </Typography>
      </Box>
    </Container>
  );
};

export default Title;