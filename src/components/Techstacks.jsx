import React from 'react';
import { Grid, Typography } from '@mui/material';
import Lottie from 'react-lottie';
import javaAnimation from '../animations/java-animation.json'
import csharpAnimation from '../animations/csharp-animation.json'
import reactAnimation from '../animations/react-animation.json'

function Techstacks() {
  return (
    <>
      <Typography variant="h6" id="yeteneklerTitle">Yetenekler</Typography>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Lottie options={{ loop: true, autoplay: true, animationData: reactAnimation }} style={{ width: '50%' }} />
        </Grid>

        <Grid item xs={4}>
          <Lottie options={{ loop: true, autoplay: true, animationData: csharpAnimation }} style={{ width: '50%' }} />
        </Grid>

        <Grid item xs={4}>
          <Lottie options={{ loop: true, autoplay: true, animationData: javaAnimation }} style={{ width: '50%' }} />
        </Grid>
      </Grid>
    </>
  );
}

export default Techstacks;
