import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './page/Home/Home';
import MovieDetail from './page/Routes/MovieDetail';
import { HorrorMoviesProvider, useHorrorFavorites } from "./components/Favourite/FavoriteMoviesContext"; // Import the horror movies context provider and hook
import { ComedyMoviesProvider, useComedyFavorites } from "./components/Favourite/FavoriteMoviesContext"; // Import the comedy movies context provider and hook

function App() {
  return (
    <BrowserRouter>
      <HorrorMoviesProvider>
        <ComedyMoviesProvider>
      <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:genre/:id" element={<MovieDetail />} />
          </Routes>
        </ComedyMoviesProvider>
      </HorrorMoviesProvider>
    </BrowserRouter>
  );
}

export default App;
