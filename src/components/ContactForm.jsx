import { useState } from 'react';
import emailjs from 'emailjs-com';
import { Grid, Typography, TextField, Button, Snackbar, Alert } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare, faInstagramSquare, faSpotify } from '@fortawesome/free-brands-svg-icons';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [notification, setNotification] = useState({
    open: false,
    message: '',
    severity: 'success' // success veya error olabilir
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_wqdj12p', 'template_durkvrh', e.target, 'tP0tTf6rw4-Jc6vEn')
      .then((result) => {
        console.log('Mail gönderildi:', result.text);
        setNotification({ open: true, message: 'Mail gönderildi', severity: 'success' });
        setFormData({ name: '', email: '', message: '' }); // inputları sıfırla
      })
      .catch((error) => {
        console.error('Mail gönderilirken bir hata oluştu:', error.text);
        setNotification({ open: true, message: 'Mail gönderilirken bir hata oluştu', severity: 'error' });
      });
  };

  const handleCloseNotification = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <Grid container spacing={2} style={{ marginTop: '25px', marginBottom: '25px' }}>
      <Grid item xs={6} style={{ backgroundColor: 'white', padding: '25px', borderRadius: '2%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)' }}>
        <Typography variant="h6" className='title' id="iletisimTitle" style={{ marginBottom: 10 }}>İletişim Formu</Typography>
        <form onSubmit={handleSubmit}>
          <TextField name="name" label="İsim Soyisim" fullWidth value={formData.name} onChange={handleChange} style={{ margin: '5px' }} />
          <TextField name="email" label="Email" fullWidth value={formData.email} onChange={handleChange} style={{ margin: '5px' }} />
          <TextField name="message" label="Mesajınız" multiline rows={4} fullWidth value={formData.message} onChange={handleChange} style={{ margin: '5px' }} />
          <Button variant="contained" type="submit" style={{ backgroundColor: 'blue' }}>Gönder</Button>
        </form>
        <Snackbar open={notification.open} autoHideDuration={6000} onClose={handleCloseNotification}>
          <Alert onClose={handleCloseNotification} severity={notification.severity}>
            {notification.message}
          </Alert>
        </Snackbar>
      </Grid>
      <Grid item xs={6} >
        <Typography variant="h6" className='title'>Sosyal Medya Hesaplarım</Typography>
        <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
          <a href="https://github.com/azmick">
            <FontAwesomeIcon icon={faGithubSquare} size="3x" style={{ color: 'blue' }} />
          </a>
          <a href="https://www.linkedin.com/in/acagrik/">
            <FontAwesomeIcon icon={faLinkedin} size="3x" style={{ color: 'blue' }} />
          </a>
          <a href="https://twitter.com/IchCugrii">
            <FontAwesomeIcon icon={faTwitterSquare} size="3x" style={{ color: 'blue' }} />
          </a>
          <a href="https://www.instagram.com/acagri.k/">
            <FontAwesomeIcon icon={faInstagramSquare} size="3x" style={{ color: 'blue' }} />
          </a>
          <a href="https://open.spotify.com/user/teif0gzgnrjj34pvkukdwjn73?si=6e1e3ed2de724bb4">
            <FontAwesomeIcon icon={faSpotify} size="3x" style={{ color: 'blue' }} />
          </a>
        </div>
      </Grid>
    </Grid>
  );
}

export default ContactForm;
