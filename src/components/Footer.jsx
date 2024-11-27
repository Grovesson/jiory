import React from "react";

const Footer = () => {
  return (
    <footer className="bg-jio-background dark:bg-jio-text text-jio-text dark:text-jio-background flex justify-center p-8">
      <div>
        <h2 className="pb-4 text-xl font-title">Yhteystiedot</h2>
        <p className="font-text leading-loose">
          Sähköposti: hallitus[at]jio.fi
          <br />
          Puhelinnumero: 040 132 6928 (Puheenjohtaja)
          <br />
          Osoite: Rajakatu 35, Tila DP55
          <br />
          40200 Jyväskylä
          <br />
          Toimisto auki tiistaisin klo 10-13.
          <br />
          Y-tunnus: 1464465-9
          <br />
          Tili: FI48 5290 0220 1643 86
        </p>
      </div>
    </footer>
  );
};

export default Footer;
