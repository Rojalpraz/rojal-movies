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
    <div
      className="bg-cover relative bg-center h-[40vh] w-[155px] rounded-xl hover:scale-110 duration-300 hover:cursor-pointer "
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
      <div className="text-sm bg-gray-900/60 text-white p-2 w-full text-center absolute bottom-0 ">
        {name}
      </div>
    </div>
  );
}

export default Moviecards;