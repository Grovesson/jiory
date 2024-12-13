import React from "react";
import { FaInstagram } from "react-icons/fa";
import { SiLinktree } from "react-icons/si";
import { FaDiscord } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center text-center p-6 bg-jio-background dark:bg-jio-text text-jio-text dark:text-jio-background border-t-2 border-jio-text/5 dark:border-jio-background/5">
      <h2 className="pb-6 text-3xl font-title">Yhteystiedot</h2>
      <p className="font-text leading-loose ">
        Sähköposti: hallitus@jio.fi
        <br />
        Osoite: Rajakatu 35, Tila DP55 40200 Jyväskylä
        <br />
        Toimisto auki tiistaisin klo 10-13.
        <br />
      </p>
      <div className="flex flex-row pt-6 gap-6">
        <a
          className="fill-jio-text dark:fill-jio-background"
          href="https://www.instagram.com/jio_ry/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={48} />
        </a>
        <a
          className="fill-jio-text dark:fill-jio-background"
          href="https://linktr.ee/jiory"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLinktree size={48} />
        </a>
        <a
          className="fill-jio-text dark:fill-jio-background"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaDiscord size={48} />
        </a>
        <a
          className="fill-jio-text dark:fill-jio-background"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTelegram size={48} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
