import React, { useRef, useEffect } from 'react';
import { AppBar, Toolbar, Typography, Tabs, Tab, Container } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const navbarRef = useRef(null); // Navbar bileşenini referans almak için useRef kullanıyoruz

  const handleTabChange = (event, newValue) => {
    const yeteneklerTitle = document.getElementById("yeteneklerTitle");
    const hakkimdaTitle = document.getElementById("hakkimdaTitle");
    const iletisimTitle = document.getElementById("iletisimTitle");
  
    if (newValue === 1 && yeteneklerTitle) {
      yeteneklerTitle.scrollIntoView({ behavior: "smooth" });
    } else if (newValue === 0 && hakkimdaTitle) {
      hakkimdaTitle.scrollIntoView({ behavior: "smooth" });
    } else if (newValue === 2 && iletisimTitle) {
      iletisimTitle.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const navbarHeight = navbarRef.current.clientHeight; // Navbar bileşeninin yüksekliğini ölçüyoruz
    document.body.style.paddingTop = `${navbarHeight+10}px`; // Body elementine Navbar yüksekliğine eşit bir padding-top ekliyoruz
    return () => {
      document.body.style.paddingTop = 0; // Clean-up: Komponent kaldırıldığında padding-top'u sıfırlıyoruz
    };
  }, []); // useEffect sadece bir kez çalışacak şekilde ayarlanıyor

  return (
    <AppBar position="fixed" style={{ backgroundColor: 'blue'}} ref={navbarRef}> {/* Navbar bileşenini ref ile referans alıyoruz */}
      <Container maxWidth="lg">
        <Toolbar style={{ justifyContent: 'space-between' }}>
          <Typography variant="h5" align="left">
            <FontAwesomeIcon icon={faLaptopCode}/>
            dev.azmi
          </Typography>
          <Tabs value={false} onChange={handleTabChange} aria-label="navigation tabs">
            <Tab label="HAKKIMDA" style={{ color: 'white' }}/>
            <Tab label="YETENEKLER" style={{ color: 'white' }}/>
            <Tab label="İLETİŞİM" style={{ color: 'white' }}/>
          </Tabs>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
