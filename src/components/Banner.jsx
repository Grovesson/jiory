import React from "react";

const Banner = () => {
  return (
    <div className="flex h-[25svh] justify-center overflow-hidden bg-[url(./assets/hallitus.webp)] bg-cover bg-center md:h-[35svh] dark:bg-[url(./assets/hallitus_bw.webp)]">
      <img className="p-12" src="./assets/jio.svg" alt="JIOn logo" />
    </div>
  );
};

export default Banner;
