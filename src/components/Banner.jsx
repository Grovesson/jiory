import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-center h-[25svh] sm:h-[50svh] bg-[url(./assets/hallitus.webp)] dark:bg-[url(./assets/hallitus_bw.webp)] bg-cover bg-center overflow-hidden">
      <img className="p-12" src="./assets/jio.svg" alt="JIOn logo" />
    </div>
  );
};

export default Banner;
