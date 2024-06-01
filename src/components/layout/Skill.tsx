import * as React from 'react';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { Grid, useMediaQuery } from '@mui/material';

const Skill = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isPc = useMediaQuery(theme.breakpoints.up('md'));
  const lgPc = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <>
      <Grid container spacing={12}>
        <Grid item xs={2}>
          <img src={`${process.env.PUBLIC_URL}/html-logo.png`} style={{ width: '80px' }}></img>
        </Grid>
        <Grid item xs={2}>
          <img src={`${process.env.PUBLIC_URL}/css-logo.png`} style={{ width: '80px' }}></img>
        </Grid>
        <Grid item xs={2}>
          <img src={`${process.env.PUBLIC_URL}/js-logo.png`} style={{ width: '80px' }}></img>
        </Grid>
        <Grid item xs={2}>
          <img src={`${process.env.PUBLIC_URL}/ts-logo.png`} style={{ width: '80px' }}></img>
        </Grid>
        <Grid item xs={2}>
          <img src={`${process.env.PUBLIC_URL}/ruby-logo.png`} style={{ width: '80px' }}></img>
        </Grid>
        <Grid item xs={2}>
          <img src={`${process.env.PUBLIC_URL}/clf-logo.png`} style={{ width: '80px' }}></img>
        </Grid>
        <Grid item xs={2}>
          <img src={`${process.env.PUBLIC_URL}/saa-logo.png`} style={{ width: '80px' }}></img>
        </Grid>
      </Grid>
    </>
  );
};

export default Skill;