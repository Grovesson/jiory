import React from "react";

const Banner = () => {
  return (
    <div className="flex justify-center h-[20svh] sm:h-[40svh] bg-[url(assets/hallitus.webp)] bg-cover bg-center overflow-hidden">
      <div className="flex justify-center bg-black/25 dark:bg-black/75 w-full">
        <img className="p-12" src="assets/jio.png" alt="JIOn logo" />
      </div>
    </div>
  );
};

export default Banner;
