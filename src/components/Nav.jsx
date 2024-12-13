import React from "react";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav
      id="top"
      className="flex flex-col justify-center gap-3 sm:gap-0 sm:flex-row px-4 py-4 sm:justify-around bg-jio text-jio-background"
    >
      <Link
        to="/"
        className="text-2xl font-title text-center sm:text-left before:content-['JIO_ry'] md:before:content-['Jyväskylän_Insinööriopiskelijat_ry']"
      ></Link>
      <nav className="flex gap-4 justify-center items-center">
        {[
          ["Etusivu", "/"],
          ["Tietoa", "/about"],
          ["Hallitus", "/board"],
          ["Jäsenille", "/members"],
        ].map(([title, url]) => (
          <NavLink
            to={url}
            className={({ isActive }) =>
              isActive
                ? "rounded-lg px-1.5 font-text text-jio-text transition ease-in-out"
                : "rounded-lg px-1.5 font-text hover:bg-jio-secondary transition ease-in-out delay-100"
            }
          >
            {title}
          </NavLink>
        ))}
      </nav>
    </nav>
  );
};

export default Nav;
