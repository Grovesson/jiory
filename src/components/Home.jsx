import React from "react";

const Home = () => {
  return (
    <>
      <div class="container cards">
        <div class="card">
          <h2>Yli 1900 jäsentä.</h2>
          <p>
            Jyväskylän Insinööriopiskelijat JIO ry on vuonna 1982 perustettu
            Insinööriopiskelijaliiton paikallisyhdistys, joka on tarkoitettu
            kaikille Jyväskylässä insinööriksi opiskeleville varsinaisille
            opiskelijoille. JIO ry:n tarkoituksena on pitää yllä
            insinöörikulttuuria, mutta myös valvoa opiskelijoiden etuja ja
            edistää yhteisöllisyyttä. JIO ry on Suomen neljänneksi suurin
            insinööriopiskelijayhdistys.
          </p>
          <div>
            <a
              href="https://easiointi.yap.fi/ilry/ejoin?lang=fi-FI&type=student"
              target="_blank"
            >
              Liity
            </a>
            <a href="./il.html" class="more">
              Lue lisää
            </a>
          </div>
        </div>
        <div class="card">
          <h2>Toiminta</h2>
          <p>
            Järjestämme useita erilaisia tapahtumia bileistä koulutuksiin ja
            ekskursioihin eli yritysvierailuihin. Järjestömme osallistuu
            vuosittain suurimpiin valtakunnallisiin
            insinööriopiskelijatapahtumiin järjestämällä esimerkiksi
            pääkampukselta edulliset kuljetukset niin ASTin-risteilylle kuin
            Insinööriopiskelijapäivillekin. Jokavuotisiin tapahtumiin kuuluu
            myös vapun alla järjestettävä Tekniikan Tempaus. Vappuna myös
            perinteisesti lakitetaan Schaumanin patsas. Näiden lisäksi pidemme
            joka vuosi myös perinteeksi tulleita tapahtumia, kuten JIOn Tähden.
          </p>
          <div>
            <a href="./il.html" class="more">
              Lue lisää
            </a>
          </div>
        </div>
        <div class="card">
          <h2>Hallitus.</h2>
          <p>
            JIO järjestää joka vuosi syyskokouksen, jolloin valitaan hallitus
            ensi vuodelle. Hallituksen rooleihin kuuluu Puheenjohtaja,
            Varapuheenjohtaja, Sihteeri, Rahastonhoitaja, Koulutuspoliittinen
            vastaava, Yritys -ja sidosryhmävastaava, Tutorvastaava, että myös
            Huvi -ja kulttuurivastaavia ja Viestintä- ja
            kansainvälisyysvastaavia.
          </p>
          <div>
            <a href="./il.html" class="more">
              Lue lisää
            </a>
          </div>
        </div>
      </div>
      <div class="container sponsors">
        <h2>Yhteistyökumppanit</h2>
        <div class="sponsor" id="1">
          <img src="./assets/tp_logo.png" alt="" />
        </div>
        <div class="sponsor" id="2">
          <img src="./assets/keskimaa.png" alt="" />
        </div>
        <div class="sponsor" id="3">
          <img src="./assets/revo.webp" alt="" />
        </div>
        <div class="sponsor" id="4">
          <img src="./assets/freetime.webp" alt="" />
        </div>
        <div class="sponsor" id="5">
          <img src="./assets/urban_bistro.png" alt="" />
        </div>
        <div class="sponsor" id="6">
          <img src="./assets/gamepit.png" alt="" />
        </div>
        <div class="sponsor" id="6">
          <img src="./assets/buugi.png" alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
