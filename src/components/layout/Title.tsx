import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const Title = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isPc = useMediaQuery(theme.breakpoints.up('md'));
  const lgPc = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      <Typography variant="h1" component="h1" sx={{ fontFamily: 'monospace', fontWeight: 700, letterSpacing: '0.4rem', fontSize: isMobile ? '1.8rem' : isTablet ? '2.2rem' : isPc ? '4rem' : lgPc ? '5rem': '5rem', color: '#DEB887' }}>
        Nine's Portfolio
      </Typography>
    </>
  );
};

export default Title;