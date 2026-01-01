import React from "react";

function Banner() {
  return (
    <section className="max-w-7xl mx-auto">
      <div
        className="relative "
      > 
      <img  className="w-full h-full relative object-cover object-center" src="https://wallpapers.com/images/hd/the-departed-maroon-movie-poster-6cqet1zx8zrmsmzh.jpg"/>
          <div className="bg-gray-900/40 w-full absolute bottom-0 text-white font-medium text-sm p-2 text-center">The Departed</div>
      </div>
    
    </section>
  );
}

export default Banner;
