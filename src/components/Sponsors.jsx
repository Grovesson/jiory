import React from "react";
import teerenpeli from "/assets/sponsors/teerenpeli.webp";
import teerenpeliw from "/assets/sponsors/teerenpeliw.webp";
import buugi from "/assets/sponsors/buugi.webp";
import freetime from "/assets/sponsors/freetime.webp";
import gamepit from "/assets/sponsors/gamepit.webp";
import gamepitw from "/assets/sponsors/gamepitw.webp";
import magos from "/assets/sponsors/magos.webp";
import skeskimaa from "/assets/sponsors/skeskimaa.webp";
import urbanbistro from "/assets/sponsors/urbanbistro.webp";
import urbanbistrow from "/assets/sponsors/urbanbistrow.webp";

import { useEffect, useState } from "react";

const Sponsors = () => {
  const [isLightMode, setIsLightMode] = useState(
    window.matchMedia("(prefers-color-scheme: light)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: light)");

    const handleChange = (e) => setIsLightMode(e.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const images = isLightMode
    ? [skeskimaa, urbanbistro, freetime, teerenpeli, buugi, gamepit, magos]
    : [skeskimaa, urbanbistrow, freetime, teerenpeliw, buugi, gamepitw, magos];

  return (
    <>
      <div className="p-6 bg-jio-background dark:bg-jio-text text-jio-text dark:text-jio-background border-t-2 border-jio-text/5 dark:border-jio-background/5">
        <h2 className="pb-4 text-3xl font-title text-center">
          Yhteistyökumppanit
        </h2>
        <div
          className={`grid grid-cols-3 md:grid-cols-7 xl:px-[10vw] gap-6 items-center`}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Sponsor ${index + 1}`}
              className="w-full h-auto object-contain"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sponsors;
