import {useState, createContext, useContext, useEffect} from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {
  const [watchlist, setWatchlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedfav = localStorage.getItem("favorites");
    if (storedfav) {
      setWatchlist(JSON.parse(storedfav));
    }
    setIsLoading(false); // Set loading to false after initial load
  }, []);

  useEffect(() => {
    if (!isLoading) { // Only save after initial load is complete
      localStorage.setItem("favorites", JSON.stringify(watchlist));
    }
  }, [watchlist, isLoading]);


  const addToWatchlist = (movi) => {
    setWatchlist((prev) => [...prev, movi]);
  };
  const removeFromWatchlist = (movi) => {
    setWatchlist((prev) => prev.filter((m) => m.id !== movi.id));
  };
  const isFavorite = (movi) => {
    return watchlist.some((m) => m.id === movi.id);
  }

  const value = {watchlist, addToWatchlist, removeFromWatchlist, isFavorite };
  return (
    <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
  );
};
