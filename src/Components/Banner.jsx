import React from "react";

function Banner() {
  return (
    <>
      <div
        className="h-[290px] md:h-[500px] bg-cover bg-center flex items-end w-full"
        style={{
          backgroundImage: `url(https://wallpapers.com/images/hd/the-departed-maroon-movie-poster-6cqet1zx8zrmsmzh.jpg)`,
        }}
      > 
          <div className="bg-gray-900/40 w-full text-white font-medium text-sm p-2 text-center">The Departed</div>
      </div>
    
    </>
  );
}

export default Banner;
