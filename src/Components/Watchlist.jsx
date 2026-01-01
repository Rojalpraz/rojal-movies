import React, {useState} from "react";
import {useMovieContext} from "../Contexts/MovieContext";
import genre from "../Genre/genreid";


function Watchlist() {
  const {watchlist, removeFromWatchlist} = useMovieContext();
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="max-w-7xl w-full mx-auto">
  
      <div className="text-center m-8">
        <input
          onChange={handleSearch}
          className="bg-gray-400/30 py-2 rounded w-80 h-10 px-4"
          type="text"
          placeholder="Search Movies.."
        />
      </div>
      <div className="mt-7 overflow-hidden m-5">
        <div className="overflow-x-auto md:overflow-visible">
          <table className="w-full text-center border-gray-400/40 border-2">
            <thead className="border-gray-400/40 border-2 hidden md:table-header-group">
              <tr className="text-xl text-gray-400">
                <th className="w-48"></th>
                <th>Name</th>
                <th className="">Ratings</th>
                <th className="w-40">Popularity</th>
                <th className="w-44">Genre</th>
                <th className="w-36"></th>
              </tr>
            </thead>

            <tbody className="block md:table-row-group">
              {watchlist
                .filter((rojal) =>
                  rojal.title.toLowerCase().includes(search.toLowerCase())
                )
                .map((rojal) => {
                  return (
                    <tr
                      key={rojal.id}
                      className="border-2 text-white border-gray-400/40 block md:table-row mb-4 md:mb-0"
                    >
                      <td className="p-3  md:table-cell flex justify-center md:justify-start">
                        <img
                          className="w-[110px] h-[110px] md:w-[120px] md:h-[130px] rounded-xl"
                          src={`https://image.tmdb.org/t/p/w500${rojal.poster_path}`}
                          alt="poster"
                        />
                      </td>
                      <td className="p-3 block md:table-cell">
                        <div className="font-bold italic">
                          {rojal.title}
                        </div>
                      </td>
                      <td className="p-3 block md:table-cell border border-gray-400/40">
                        {rojal.vote_average.toFixed(1)}
                      </td>
                      <td className="p-3 block md:table-cell border border-gray-400/40">
                        {rojal.popularity.toFixed(0)}
                      </td>
                      <td className="p-3 block md:table-cell border border-gray-400/40">
                        {genre[rojal.genre_ids[0]]}
                      </td>
                      <td className="p-3 block md:table-cell border border-gray-400/40 ">
                        <button
                          onClick={() => removeFromWatchlist(rojal)}
                          className="px-3 py-1 rounded-xl bg-red-600 text-white hover:cursor-pointer"
                        >
                          Delete
                        </button>
                        {/*when using map, filter and we need to pass argument in function when clicking button we use arrow function, without argument we can directly write onClick={functionname}*/}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    
    </div>
  );
}

export default Watchlist;
