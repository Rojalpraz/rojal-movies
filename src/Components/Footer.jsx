import React from "react";

import {Link} from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-black">
      <div className="w-full max-w-7xl mx-auto p-8 flex flex-col">
        <div className="flex flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
          <Link to="/">
            <img className="bg-cover w-[85px]" src="/logo.jpg" />
          </Link>
          <ul className="flex flex-wrap items-center  text-white gap-y-2 gap-x-8">
            <li>
              <a href="#" className=" hover:text-blue-400 text-lg">
                About Us
              </a>
            </li>
            <li>
              <Link
                to="/watchlist"
                className=" hover:text-blue-400 focus:text-blue-400 text-lg"
              >
                Watchlist
              </Link>
            </li>
            <li>
              <a href="#" className=" hover:text-blue-400  text-lg">
                Help
              </a>
            </li>
            <li>
              <a
                href="#"
                className=" hover:text-blue-400 focus:text-slate-500 text-lg"
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <p className="block mb-6 text-sm text-center text-white md:mb-0 border-t border-slate-200 mt-4 pt-4">
          Copyright © 2025&nbsp;
          <Link to="/">WatchMovies</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
