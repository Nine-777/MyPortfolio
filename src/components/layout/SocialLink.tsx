import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import styled from 'styled-components';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';

const SocialLink = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isPc = useMediaQuery(theme.breakpoints.up('md'));
  const lgPc = useMediaQuery(theme.breakpoints.up('lg'));
  const xlPc = useMediaQuery(theme.breakpoints.up('xl'));

  return (
    <Box sx={{ display: 'flex', marginTop: '50px', justifyContent: 'space-around' }}>
      <a href="https://github.com/Nine-777" target="_blank" rel="noopener noreferrer">
        <img src={`${process.env.PUBLIC_URL}/github-mark.png`} alt="github-mark" style={{ height: '40px', marginRight: '60px', borderRadius: '5px' }} />
      </a>
      <a href="https://twitter.com/Nine_earth777" target="_blank" rel="noopener noreferrer">
        <img src={`${process.env.PUBLIC_URL}/x-mark.png`} alt="github-mark" style={{ height: '40px', marginRight: '60px', borderRadius: '5px' }} />
      </a>
      <a href="https://qiita.com/Nine-777" target="_blank" rel="noopener noreferrer">
        <img src={`${process.env.PUBLIC_URL}/qiita-icon.png`} alt="github-mark" style={{ height: '40px', marginRight: '10px', borderRadius: '5px' }} />
      </a>
    </Box>
  );
};

export default SocialLink;