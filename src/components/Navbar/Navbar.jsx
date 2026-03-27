import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../..//assets/logo.png";
import { FaGithub } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className="navbar px-7 py-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-violet-600 underline" : ""
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/apps"}
              className={({ isActive }) =>
                isActive ? "text-violet-600 underline" : ""
              }
            >
              Apps
            </NavLink>
            <NavLink
              to={"/installation"}
              className={({ isActive }) =>
                isActive ? "text-violet-600 underline" : ""
              }
            >
              Installation
            </NavLink>
          </ul>
        </div>
        <Link to={"/"} className="flex items-center gap-1">
          <img className="w-12" src={logo} />
          <span className="text-xl font-bold">Hero Io</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex text-2xl">
        <ul className="menu menu-horizontal px-1 space-x-5">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? "text-violet-600 underline" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/apps"}
            className={({ isActive }) =>
              isActive ? "text-violet-600 underline" : ""
            }
          >
            Apps
          </NavLink>
          <NavLink
            to={"/installation"}
            className={({ isActive }) =>
              isActive ? "text-violet-600 underline" : ""
            }
          >
            Installation
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <Link
          to={"https://github.com/atik735"}
          className="flex gap-1 items-center px-3 py-1 bg-violet-700 text-white rounded-lg"
        >
          <span>
            <FaGithub />
          </span>
          <span>Contribute</span>
        </Link>
      </div>
    </div>
  );
}
