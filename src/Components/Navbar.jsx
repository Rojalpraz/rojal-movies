import React from "react";

import {Link} from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full  bg-black border-b border-b-gray-600 ">
    <div className="p-2 flex max-w-7xl mx-auto items-center justify-between gap-3">
      <div className="flex items-center gap-4">
        <Link to="/">
          <img src="/logo.jpg" alt="Movie Logo" className="w-[50px]" />
        </Link>
        <Link
          to="/"
          className="text-white italic text-2xl font-bold font-[Roboto]"
        >
          WatchMovies
        </Link>
      </div>
      <div className="flex items-center gap-5 mr-3">
        <Link
          to="/watchlist"
          className="hover:text-red-500 text-white text-lg font-bold  md:text-2xl font-[Roboto]  "
        >
          Watchlist
        </Link>
      </div>
    </div>
    </nav>
  );
}

export default Navbar;
//after react router dom , replace anchor tag<a></a> with <Link></Link> and use 'to' instead of 'href'
