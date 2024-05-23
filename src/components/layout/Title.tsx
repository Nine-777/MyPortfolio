import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const Title = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isPc = useMediaQuery(theme.breakpoints.up('md'));
  const lgPc = useMediaQuery(theme.breakpoints.up('lg'));
  const xlPc = useMediaQuery(theme.breakpoints.up('xl'));

  return (
    <Container maxWidth="xl" sx={{ height: '80vh' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <Typography variant="h1" component="h1" sx={{ fontFamily: 'monospace', fontWeight: 700, fontSize: isMobile ? '1.6rem' : isTablet ? '2.2rem' : isPc ? '4rem' : lgPc ? '5rem': '5rem', letterSpacing: '.3rem', color: '#DEB887' }}>
          Nine's Portfolio
        </Typography>
      </Box>
    </Container>
  );
};

export default Title;