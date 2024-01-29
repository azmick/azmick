import React from 'react';
import { Grid, Typography, Button } from '@mui/material';

function Aboutme() {
  return (
    <Grid style={{backgroundColor:'white', padding:'25px', borderRadius:'2%', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)'}}>
      <Typography variant="h6"  id="hakkimdaTitle">Hakkımda</Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography variant="body1">
            2014-2018 yılları arasında Mehmet Niyazi Altuğ Anadolu
            Lisesinden Mezun olarak 2019 yılında Kocaeli Üniversitesinde
            Bilgisayar Mühendisliği bölümüne başladım. Şu an 4.sınıf
            olarak öğrenimimi Sakarya Üniversitesinde sürdürmekteyim.
            Kocaeli Üniversitesinde öğrenimim boyunca C ve Java
            programlama dilleri üzerinde giriş ve ortalama düzeylerde
            projelerle ilgilendim (if switch case yapıları, for while do while
            döngüleri, arrayler ve nesneye yönelimli programlama) ve
            MicrosoftSQL kullanımı öğrendim. Sakarya Üniversitesindeki
            şu an ki öğrenimim boyunca ise C++, Asp.NET MVC Core, ve
            PostgreSQL üzerinde geliştirmeler yapıyorum. Side project
            dediğimiz kısımda ise HTML, CSS ve JS ile uğraşmaktan keyif
            alıyorum. 3.Sınıf yazında gönüllü olarak Toyota Kocaeli Kaya’da
            IT ekibinde yer aldım ve donanım problemleriyle ilgilendim
            daha sonrasında ise üniversitemin zorunlu yaz stajyerliği için
            RSU Bilişim ve Danışmanlık Hizmetlerinde yazılım
            mühendisliği stajyeri pozisyonunda çalıştım. Verdikleri
            mentörlükle beraber Asp .Net Core 7'de N Tier katmanlı
            mimari ile JavaScriptin framework’ü olan React’ı kullanarak
            geliştirmeler yaptım. Öğrenmeye, araştırmaya ve takım
            çalışmasına açık pozitif bir insanım
          </Typography>
          <Button variant="contained" style={{ backgroundColor: 'blue', marginTop:'10px' }} href='https://drive.google.com/file/d/1HnmMK0wWb_aeauZfrTG7HbLGmJnEH5pR/view?usp=sharing' target="_blank">CV'Mİ İNDİR</Button>
        </Grid>
        <Grid item xs={6}>
          <img src="img/homepageimage.png" alt="Resim" style={{ width: '100%' }} />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Aboutme;
