import React from "react";

const About = () => {
  return (
    <>
      <div className="text-left p-6 grid grid-cols-1 lg:grid-cols-2 uw:grid-cols-4 gap-y-12 gap-x-6 items-stretch bg-jio-background dark:bg-jio-text text-jio-text dark:text-jio-background">
        <div className="uw:order-1">
          <h2 className="mb-6 text-2xl font-title">
            Jyväskylän insinööriopiskelijat ry
          </h2>
          <p>
            Jyväskylän Insinööriopiskelijat JIO ry on vuonna 1982 perustettu
            Insinööriopiskelijaliiton paikallisyhdistys, joka on tarkoitettu
            kaikille Jyväskylässä insinööriksi opiskeleville varsinaisille
            opiskelijoille. JIO ry:n tarkoituksena on pitää yllä
            insinöörikulttuuria, mutta myös valvoa opiskelijoiden etuja ja
            edistää yhteisöllisyyttä. JIO ry on Suomen neljänneksi suurin
            insinööriopiskelijayhdistys. Järjestämme useita erilaisia tapahtumia
            bileistä koulutuksiin ja ekskursioihin eli yritysvierailuihin.
            Järjestömme osallistuu vuosittain suurimpiin valtakunnallisiin
            insinööriopiskelijatapahtumiin järjestämällä esimerkiksi
            pääkampukselta edulliset kuljetukset niin ASTin-risteilylle kuin
            Insinööriopiskelijapäivillekin. Jokavuotisiin tapahtumiin kuuluu
            myös vapun alla järjestettävä Tekniikan Tempaus. Vappuna myös
            perinteisesti lakitetaan Schaumanin patsas. Lisäksi joka vuosi
            järjestetään muita muuttuvia tapahtumia ja useita hauskoja
            saunailtoja Meidän tehtävämme on pitää huolta opiskelijoiden
            oikeuksista. Jäseniemme edunvalvonta on yksi tärkeimmistä
            päätoimistamme – tässä teemme tiivistä yhteistyötä oppilaitoksen
            sekä opiskelijakunnan kanssa.
          </p>
        </div>
        <div className="bg-[url(assets/molkky.png)] bg-cover bg-center hidden lg:grid uw:order-2"></div>

        <div className="bg-[url(assets/il_kuva.png)] bg-cover bg-center hidden lg:grid uw:order-4"></div>

        <div className="uw:order-3">
          <h2 className="mb-6 text-2xl font-title">Insinööriliitto</h2>
          <p className="mb-3">
            Kun valmistut ja jatkat Insinööriliiton jäsenenä, siirryt
            automaattisesti alueesi paikallisyhdistyksen jäseneksi. Muista tehdä
            Insinööriliitolle valmistumisilmoitus. Keski-Suomen Insinöörit ry:n
            toiminta on vireää ja monipuolista – yhdistys järjestää
            jäsenistölleen retkiä, tapahtumia ja erilaisia aktiviteetteja.
            Lisäksi yhdistys auttaa paikallisessa edunvalvonnassa. Yhdistys
            toimii tiiviissä yhteistyössä JIO ry:n kanssa. Yhdistyksessä on
            erilaisia toimikuntia, joiden toimintaan jäsenet voivat osallistua
            ja tällä tavalla vaikuttaa toiminnan ja monipuolisten tapahtumien
            ylläpitämiseen. Osallistumalla toimintaan voit itse olla
            vaikuttamassa siihen, mitä jäsenyydelläsi saat!
          </p>
          <div className="flex content-center">
            <a
              href="https://www.ilry.fi"
              target="_blank"
              className="text-white bg-il hover:bg-il/50 py-1.5 px-3 mr-3"
              rel="noopener noreferrer"
            >
              Lue lisää Insinööriliitosta
            </a>
          </div>
        </div>

        <div className="uw:order-5">
          <h2 className="mb-6 text-2xl font-title">
            Keski-Suomen insinöörit ry
          </h2>
          <p className="mb-3">
            Keski-Suomen Insinöörit on vuonna 1946 perustettu Insinööriliitto IL
            ry:n jäsenyhdistys, jonka jäseniä ovat jo valmistuneet insinöörit
            Keski-Suomen alueelta. Kun valmistut ja jatkat Insinööriliiton
            jäsenenä, siirryt automaattisesti alueesi jäsenyhdistyksen
            jäseneksi. Keski-Suomen alueella siirryt Keski-Suomen Insinöörien
            jäseneksi. Muista kuitenkin tehdä Insinööriliitolle
            valmistumisilmoitus. Keski-Suomen Insinöörit ry:n toiminta on vireää
            ja monipuolista – yhdistys järjestää jäsenistölleen retkiä,
            tapahtumia ja erilaisia aktiviteetteja. Lisäksi yhdistys auttaa
            paikallisessa edunvalvonnassa. Yhdistys toimii tiiviissä
            yhteistyössä JIO ry:n kanssa. Yhdistyksessä on erilaisia
            toimikuntia, joiden toimintaan jäsenet voivat osallistua ja tällä
            tavalla vaikuttaa toiminnan ja monipuolisten tapahtumien
            ylläpitämiseen. Osallistumalla toimintaan voit itse olla
            vaikuttamassa siihen, mitä jäsenyydelläsi saat!
          </p>
          <div className="flex gap-3 flex-wrap">
            <a
              href="https://www.ksinsinoorit.fi"
              target="_blank"
              className="inline-block text-white bg-ksi hover:bg-ksi/50 py-1.5 px-3"
              rel="noopener noreferrer"
            >
              Lue lisää Keski-Suomen Insinööreistä
            </a>
            <a
              href="https://www.ilry.fi/uran-alkutaipaleella/valmistuminen/valmistumisilmoitus/"
              target="_blank"
              className="inline-block text-white bg-ksi hover:bg-ksi/50 py-1.5 px-3"
              rel="noopener noreferrer"
            >
              Valmistumisilmoitukseen
            </a>
          </div>
        </div>
        <div className="bg-[url('assets/engineer.jpg')] bg-cover bg-center hidden lg:grid uw:order-6"></div>
        <div className="bg-[url('assets/jesse.png')] bg-cover bg-center hidden lg:grid uw:order-8"></div>
        <div className="uw:order-7">
          <h2 className="mb-6 text-2xl font-title">
            Insinööriopiskelijaliitto
          </h2>
          <p className="mb-3">
            Kun valmistut ja jatkat Insinööriliiton jäsenenä, siirryt
            automaattisesti alueesi paikallisyhdistyksen jäseneksi. Muista tehdä
            Insinööriliitolle valmistumisilmoitus. Keski-Suomen Insinöörit ry:n
            toiminta on vireää ja monipuolista – yhdistys järjestää
            jäsenistölleen retkiä, tapahtumia ja erilaisia aktiviteetteja.
            Lisäksi yhdistys auttaa paikallisessa edunvalvonnassa. Yhdistys
            toimii tiiviissä yhteistyössä JIO ry:n kanssa. Yhdistyksessä on
            erilaisia toimikuntia, joiden toimintaan jäsenet voivat osallistua
            ja tällä tavalla vaikuttaa toiminnan ja monipuolisten tapahtumien
            ylläpitämiseen. Osallistumalla toimintaan voit itse olla
            vaikuttamassa siihen, mitä jäsenyydelläsi saat!
          </p>
          <div>
            <a
              href="https://www.ilry.fi/uran-alkutaipaleella/opiskelijat/insinooriopiskelijaliitto-iol-ry/?gad_source=1&gclid=Cj0KCQiAsOq6BhDuARIsAGQ4-zghlM6HVS3nEw6-mxuAG8zyRVtuuGgW_JeSKZlTyttWOB_xeIPLp9EaAjPdEALw_wcB"
              target="_blank"
              className="inline-block text-white bg-il hover:bg-il/50 py-1.5 px-3 mr-3"
              rel="noopener noreferrer"
            >
              Lue lisää Insinööriopiskelijaliitosta
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
