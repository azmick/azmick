import React from 'react';
import { Container, Grid, Button } from '@mui/material'; // Button ekledik
import Navbar from './components/Navbar';
import Aboutme from './components/Aboutme';
import Techstacks from './components/Techstacks';
import ContactForm from './components/ContactForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function App() {

  const [isSmallScreen] = React.useState(window.innerWidth < 768);
  return (
    <>
      <Container>
        <Navbar />
        <Grid container spacing={4}>
          <Grid item xs={12}>
            <Aboutme />
          </Grid>
          <Grid item xs={12}>
            <Techstacks />
          </Grid>
          <Grid item xs={12}>
            <ContactForm />
          </Grid>
        </Grid>
      </Container>
      <Button
        variant="contained"
        color="primary"
        onClick={scrollToTop}
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: '1000', // butonun diğer öğelerin üstünde olması için
          backgroundColor: 'blue',
          display: isSmallScreen ? 'none' : 'block', // Mobil ekranlarda gizle
        }}
      >
        <FontAwesomeIcon icon={faArrowUp} />

      </Button>
    </>
  );
}

export default App;
