import React from "react";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav
      id="top"
      className="flex justify-around bg-jio px-4 py-4 text-jio-background"
    >
      <Link
        to="/"
        className="font-title text-2xl before:content-['JIO_ry'] md:before:content-['Jyväskylän_Insinööriopiskelijat_ry']"
      ></Link>
      <nav className="flex gap-4">
        {[
          ["Etusivu", "/"],
          ["Tietoa", "/about"],
          ["Hallitus", "/board"],
        ].map(([title, url]) => (
          <NavLink
            to={url}
            className={({ isActive }) =>
              isActive
                ? "rounded-lg p-1.5 font-text text-jio-text transition ease-in-out"
                : "rounded-lg p-1.5 font-text transition delay-100 ease-in-out hover:bg-jio-secondary"
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
