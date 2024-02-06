import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import "./Navbar.css";
export default function Navbar() {
  const [sideBar, setSideBar] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  function handleClick() {
    let status = sideBar;
    setSideBar(!status);
  }

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");

    const handleNav = () => {
      setIsDesktop(media.matches);
    }

    handleNav();
    media.addEventListener("change", handleNav);

    return () => media.removeEventListener("change", handleNav);
  }, [isDesktop]);

  return (
    <>
      <header
        id="header"
        className="text-gray-400 bg-slate-100 shadow-md w-full fixed top-0 z-[9999] lg:flex justify-center items-center lg:ps-32"
      >
        <label
          htmlFor="burger"
          className="burger absolute w-8 h-6 bg-transparent cursor-pointer block top-5 left-5 lg:hidden"
        >
          <input
            id="burger"
            type="checkbox"
            className="hidden peer"
            onChange={handleClick}
            checked={sideBar === true}
          />
          <span className="block absolute z-10 h-1 w-full bg-black rounded-lg opacity-100 left-0 rotate-0 transition duration-300 ease-in-out top-0 origin-[left_center] peer-checked:top-0 peer-checked:left-1 peer-checked:rotate-[405deg]"></span>
          <span className="block absolute z-10 h-1 w-full bg-black rounded-lg opacity-100 left-0 rotate-0 transition duration-300 ease-in-out top-1/2 -translate-y-1/2 origin-[left_center] peer-checked:w-0 peer-checked:opacity-0"></span>
          <span className="block absolute z-10 h-1 w-full bg-black rounded-lg opacity-100 left-0 rotate-0 transition duration-300 ease-in-out top-[95%] -translate-y-1/2 origin-[left_center] peer-checked:top-[1.5625rem] peer-checked:left-1 peer-checked:rotate-[-405deg]"></span>
        </label>

        <div className="container  mx-auto  flex flex-wrap py-3 md:flex-row items-center justify-around lg:mx-0">
          <a className="flex title-font font-medium justify-center items-center text-white md:mb-0">
            <img
              loading="lazy"
              src="/logo/precursor_logo.png"
              alt="Precursor Info Solutions Logo"
              className="object-contain h-12 "
            />
          </a>

          {(sideBar || isDesktop) && (
            <>
            <h1 className="text-2xl font-bold text-black bg-[#84eaff] z-50 left-0 top-16 w-1/2 text-center absolute">Menu</h1>
            <nav className="flex flex-col absolute top-0 left-0 h-screen w-1/2 gap-10 pl-5 pt-[5.2rem] pt-28 items-start text-base justify-start bg-[#ffffff] shadow-2xl  md:ml-auto md:mr-auto md:flex lg:static lg:flex-row lg:h-0 lg:pt-0 lg:items-center lg:justify-center">
              
              <NavLink
                to="/"
                onClick={handleClick}
                className={({ isActive }) =>
                  `${isActive ? "text-precursor_theme_color border-b-precursor_theme_color border-b-2" : "text-black"
                  } cursor-pointer mr-5 hover:text-precursor_theme_color font-bold`
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                onClick={handleClick}
                className={({ isActive }) =>
                  `${isActive ? "text-precursor_theme_color border-b-precursor_theme_color border-b-2" : "text-black"
                  } cursor-pointer mr-5 hover:text-precursor_theme_color font-bold`
                }
              >
                About
              </NavLink>

              <NavLink
                to="/courses"
                onClick={handleClick}
                className={({ isActive }) =>
                  `${isActive ? "text-precursor_theme_color border-b-precursor_theme_color border-b-2" : "text-black"
                  } cursor-pointer mr-5 hover:text-precursor_theme_color font-bold`
                }
              >
                Courses
              </NavLink>
              <NavLink
                to="/contact"
                onClick={handleClick}
                className={({ isActive }) =>
                  `${isActive ? "text-precursor_theme_color border-b-precursor_theme_color border-b-2" : "text-black"
                  } cursor-pointer mr-5 hover:text-precursor_theme_color font-bold`
                }
              >
                Contact
              </NavLink>
            </nav>
            </>
          )}

        </div>
      </header>
    </>
  );
}
