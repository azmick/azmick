import React from 'react';
import { Container, Grid } from '@mui/material';
import Navbar from './components/Navbar';
import Aboutme from './components/Aboutme';
import Techstacks from './components/Techstacks';
import ContactForm from './components/ContactForm';

function App() {
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
    </>
  );
}

export default App;
