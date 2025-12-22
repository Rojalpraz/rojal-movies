import React, {useEffect} from "react";
import {useState} from "react";
import Moviecards from "./Moviecards";
import axios from "axios";
import Pagination from "./Pagination";
import Footer from "./Footer";
function Movies() {
  const [movies, setMovies] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  function previousPage() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }
  function nextPage() {
    setPageNumber(pageNumber + 1);
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=bb5363d6c4910ed330cb8cefa624423d&language=en-US&page=${pageNumber}`
      )
      .then((response) => {
        setMovies(response.data.results);
      });
  }, [pageNumber]);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="grow w-full mx-auto">
        <div className="p-6">
          <div className="text-xl text-white font-bold text-center font-[Roboto] pb-4">
            Popular Movies 
          </div>
          <div className="flex flex-row justify-around flex-wrap lg:grid lg:grid-cols-5    
 2xl:grid 2xl:grid-cols-6 m-2 gap-y-6">
            {movies.map((obj) => (
              <Moviecards key={obj.id} praz={obj} img={obj.poster_path} name={obj.title} />
            ))}
          </div>
        </div>
        
      </div>
      <Pagination next={nextPage} prev={previousPage} pageNO={pageNumber} />
      <Footer/>
    </div>
  );
}

export default Movies;
