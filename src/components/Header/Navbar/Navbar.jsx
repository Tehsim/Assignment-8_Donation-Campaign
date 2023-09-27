import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <div className="">
      <nav className="flex justify-between items-center py-6 shadow-md px-5">

        <Logo></Logo>

        <ul className="flex gap-5">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "cs-active" : ""
              }
            >
              Home
            </NavLink>

          </li>

          <li>
            <NavLink
              to="/favorites"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "cs-active" : ""
              }
            >
              Donation
            </NavLink>

            
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "cs-active" : ""
              }
            >
              Statistics
            </NavLink>

            
          </li>
        </ul>

      </nav>
    </div>
  );
};

export default Navbar;
