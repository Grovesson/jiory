import React from "react";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  return (
    <nav
      id="top"
      className="flex px-4 py-4 justify-around bg-jio text-jio-background"
    >
      <Link
        to="/"
        className="text-2xl font-title before:content-['JIO_ry'] md:before:content-['Jyväskylän_Insinööriopiskelijat_ry']"
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
                : "rounded-lg p-1.5 font-text hover:bg-jio-secondary transition ease-in-out delay-100"
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
