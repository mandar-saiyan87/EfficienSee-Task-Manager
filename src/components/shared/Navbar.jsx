import React, { useRef, useState } from "react";
import { NavLink } from "react-router";

function Navbar() {
  const [drawer, setDrawer] = useState(false);

  const drawerRef = useRef(null);

  function clickOverlay(e) {
    if (drawerRef.current && !drawerRef.current.contains(e.target)) {
      setDrawer(false);
    }
  }

  return (
    <>
      <div className="w-full absolute top-0 left-0 bg-transparent z-10">
        <div className="w-full max-w-[1536px] mx-auto p-4">
          {/* Desktop Navbar start */}
          <div className="w-full flex items-center justify-between">
            <div
              className="flex-center gap-x-5 text-primary lg:hidden"
              onClick={() => setDrawer(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <div className="w-full max-w-max text-2xl font-semibold italic text-primary">
                <p className="hidden md:block">AFFTasks</p>
                <p className="flex md:hidden">AFT</p>
                <p className="hidden md:block text-xs font-normal text-secondary">
                  Stay Organized, Get Things Done
                </p>
              </div>
            </div>
            <div className="w-full max-w-max text-2xl font-semibold italic text-primary">
              <p className="hidden lg:block">AFFTasks</p>
              <p className="hidden lg:block text-xs font-normal text-secondary">
                Stay Organized, Get Things Done
              </p>
            </div>
            <ul className="hidden lg:flex items-center gap-x-16 text-lg text-secondary navtabs">
              <li>Home</li>
              <li>About</li>
              <li>Pricing</li>
            </ul>
            <div className="flex items-center gap-x-3 xl:gap-x-5">
              <NavLink
                to="/register"
                className="autbtn text-secondary border-[1px] border-secondary hover:bg-secondary/5"
              >
                Sign Up
              </NavLink>
              <button className="autbtn bg-primary text-white hover:bg-primary/70">
                Login
              </button>
            </div>
          </div>
          {/* Desktop Navbar start */}
        </div>
      </div>
      {/* Small Device / Mobile / Tablet Navbar start */}
      <div
        className={
          drawer
            ? "fixed w-screen h-screen top-0 left-0 z-20 bg-black/40 lg:hidden}"
            : ""
        }
        onClick={clickOverlay}
      >
        <div
          className={
            drawer
              ? "fixed w-[80%] h-full bg-white top-0 left-0 py-3 px-4 overflow-auto ease-in duration-500 md:w-[50%] lg:hidden"
              : "fixed h-full bg-white top-0 left-[-100%] py-3 px-4 ease-in duration-500 lg:hidden"
          }
          ref={drawerRef}
        >
          <div className="w-full flex items-center justify-between">
            <div className="w-full text-lg font-semibold italic text-primary">
              <p className="">AFFTasks</p>
              <p className="text-[10px] leading-3 font-normal text-secondary">
                Stay Organized, Get Things Done
              </p>
            </div>
            <div className="text-secondary" onClick={() => setDrawer(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>
          <hr className="my-5 bg-slate-400 h-[1px] border-none" />
          <ul className="flex flex-col items-start gap-y-7 text-lg text-secondary navtabs p-5">
            <li onClick={() => setDrawer(false)}>Home</li>
            <li onClick={() => setDrawer(false)}>About</li>
            <li onClick={() => setDrawer(false)}>Pricing</li>
          </ul>
        </div>
      </div>
      {/* Small Device / Mobile / Tablet Navbar end*/}
    </>
  );
}

export default Navbar;
