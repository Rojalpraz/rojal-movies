import React from "react";
import Navbar from "./Components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Watchlist from "./Components/Watchlist";
import Movies from "./Components/Movies";
import Banner from "./Components/Banner";

import { MovieProvider } from "./Contexts/MovieContext";
import Footer from "./Components/Footer";


function App() {
    

  return (
    <>

    <MovieProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies />
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
  
      </BrowserRouter>
      </MovieProvider>
    </>
  );
}

export default App;
