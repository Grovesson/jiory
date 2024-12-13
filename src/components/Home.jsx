import React, { useState } from "react";
import { RiCursorFill } from "react-icons/ri";

const Home = () => {
  const yearsSince1982 = () => new Date().getFullYear() - 1982;

  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 p-6 bg-jio-background dark:bg-jio-text text-jio-text dark:text-jio-background">
        <div
          className={`flex flex-col bg-[url(assets/lippu.webp)] bg-cover bg-center group`}
        >
          <div className="bg-black/75 sm:opacity-0 sm:group-hover:opacity-100 sm:group-hover:bg-black/75 drop-shadow-lg sm:hover:drop-shadow-2xl transition ease-in-out delay-100 p-6 h-full">
            <h2 className="text-white text-lg font-title mb-3">
              Yli 1900 jäsentä
            </h2>
            <p className="text-white font-text mb-3">
              Jyväskylän Insinööriopiskelijat JIO ry on vuonna 1982 perustettu
              Insinööriopiskelijaliiton paikallisyhdistys, joka on tarkoitettu
              kaikille Jyväskylässä insinööriksi opiskeleville varsinaisille
              opiskelijoille. JIO ry:n tarkoituksena on pitää yllä
              insinöörikulttuuria, mutta myös valvoa opiskelijoiden etuja ja
              edistää yhteisöllisyyttä. JIO ry on Suomen neljänneksi suurin
              insinööriopiskelijayhdistys.
            </p>
            <div className="flex content-center">
              <a
                href="https://easiointi.yap.fi/ilry/ejoin?lang=fi-FI&type=student"
                target="_blank"
                className="text-white bg-jio-secondary hover:bg-jio py-1.5 px-3 mr-3"
                rel="noopener noreferrer"
              >
                Liity
              </a>

              <a
                href="./il.html"
                className="text-jio-accent hover:text-jio content-center"
              >
                Lue lisää
              </a>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col bg-[url(assets/hallitus23.webp)] bg-cover bg-center group relative`}
        >
          {!isHidden && (
            <div
              className="absolute z-10 animate-none opacity-0 sm:opacity-100 sm:animate-wiggle sw:hover:animate-fadeOut hover:hidden transition flex justify-center content-center w-full h-full"
              onMouseEnter={() => setIsHidden(true)}
            >
              <RiCursorFill
                size={96}
                className="content-center self-center justify-center"
              />
            </div>
          )}
          <div className="bg-black/75 sm:opacity-0 sm:group-hover:opacity-100 sm:group-hover:bg-black/75 drop-shadow-lg sm:hover:drop-shadow-2xl transition ease-in-out delay-100 p-6 h-full">
            <h2 className="text-white text-lg font-title mb-3">
              10 koulutusalaa.
            </h2>
            <p className="text-white font-text mb-3">
              JAMKin insinööriopinnot tarjoavat sinulle käytännönläheisen,
              tulevaisuuden työelämässä arvostetun teknisen osaamisen ja
              mahdollisuuden erikoistua oman kiinnostuksesi mukaisesti.
              Esimerkiksi tämä nettisivu on tehty TTV tutkinnon kurssin
              harjoitusta varten.
            </p>
            <div className="flex content-center">
              <a
                href="https://www.jamk.fi/fi/hae-opiskelemaan/tekniikan-ala"
                className="text-jio-accent content-center hover:text-jio"
              >
                Lue lisää
              </a>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col bg-[url(assets/patsas.webp)] bg-top sm:bg-[center_bottom_23rem] lg:bg-center xl:bg-top 2xl:bg-[center_bottom_23rem] bg-cover group`}
        >
          <div className="bg-black/75 sm:opacity-0 sm:group-hover:opacity-100 sm:group-hover:bg-black/75 drop-shadow-lg sm:hover:drop-shadow-2xl transition ease-in-out delay-100 p-6 h-full">
            <h2 className="text-white text-lg font-title mb-3">
              {yearsSince1982() + " toimintavuotta."}
            </h2>
            <p className="text-white font-text mb-3">
              Jyväskylän insinööriopiskelijat JIO on vuosien aikana edistänyt
              insinööriopiskelijoiden yhteisöllisyyttä, järjestänyt tapahtumia
              ja valvonut opiskelijoiden etuja sekä rakentanut aktiivisesti
              insinöörikulttuuria.
            </p>
            <div className="flex content-center">
              <a
                href="/about"
                className="text-jio-accent content-center hover:text-jio"
              >
                Lue lisää
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
