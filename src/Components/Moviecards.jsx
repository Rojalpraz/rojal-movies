import React from "react";
import {useMovieContext} from "../Contexts/MovieContext";

function Moviecards({img, name, praz}) {
  const {isFavorite, addToWatchlist, removeFromWatchlist} = useMovieContext();
  const favvorites = isFavorite(praz);
  
  function checkFavorite() {
    if (favvorites) {
      removeFromWatchlist(praz);
    } else {
      addToWatchlist(praz);
    }
  }
  
  return (
    <section className="mx-auto">
    <div
      className="bg-cover relative bg-center h-[22vh] w-[150px] md:h-[40vh] md:w-[155px] lg:w-[180px] lg:h-[42vh] 2xl:w-[300px] 2xl:h-[25vh]  extra rounded-xl hover:scale-110 duration-300 hover:cursor-pointer "
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${img})`,
      }}
    > 
      <button
        onClick={checkFavorite}
        className={` hover:cursor-pointer text-xl font-bold absolute right-1 top-1 ${
          favvorites ? 'text-red-500' : 'text-white'
        }`}
        style={{
          padding: "0.5rem",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "50%",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ❤︎
      </button>
  
    </div>
    </section>
  );
}

export default Moviecards;