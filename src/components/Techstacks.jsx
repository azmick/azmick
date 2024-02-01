import React from 'react';
import { Grid, Typography } from '@mui/material';
import { motion, useAnimation } from 'framer-motion';
import Lottie from 'react-lottie';
import javaAnimation from '../animations/java-animation.json';
import csharpAnimation from '../animations/csharp-animation.json';
import reactAnimation from '../animations/react-animation.json';
import { useInView } from 'react-intersection-observer'; // Ekliyoruz

function Techstacks() {
  // Animasyon ve görünürlük durumu için kontrol değişkenleri
  const controls = useAnimation();
  const [ref, inView] = useInView();

  // Ekran içine girdiğinde animasyonu başlat
  if (inView) {
    controls.start({ opacity: 1, x: 0 });
  }

  return (
    <>
      <motion.div
        ref={ref} // Komponenti izlemek için referansı ekliyoruz
        initial={{ opacity: 0, x: -100 }}
        animate={controls} // Kontrolü buraya ekliyoruz
        transition={{ duration: 1 }}
      >
        <Typography variant="h6" id="yeteneklerTitle" style={{ marginLeft: '10px' }}>
          Yetenekler
        </Typography>
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
      </motion.div>
    </>
  );
}

export default Techstacks;
