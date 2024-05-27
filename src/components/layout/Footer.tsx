import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isPc = useMediaQuery(theme.breakpoints.up('md'));
  const lgPc = useMediaQuery(theme.breakpoints.up('lg'));
  const xlPc = useMediaQuery(theme.breakpoints.up('xl'));

  return (
    <Box sx={{ display: 'flex', backgroundColor: '#333333', height: '50px' }}>
    </Box>
  );
};

export default Footer;