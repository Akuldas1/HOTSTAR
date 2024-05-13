// import Nav from "./components/Nav/Nav";
// import Home from "./page/Home/Home"
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Nav />
//         <Routes>
//           <Route path="/" element={<Home/>}/>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App

// import Nav from "./components/Nav/Nav";
// import Home from "./page/Home/Home"
// import Detailed from "./page/Routes/Detailed";
// import MovieDetail from "./page/Routes/MovieDetail";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Nav />
//         <Routes>
//           <Route path="/" element={<Home/>}/>
//           <Route path="/detailed" element={<Detailed/>}/> 
//           <Route path="/movie/:id" element={<MovieDetail/>} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App

// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Nav from './components/Nav/Nav';
// import Home from './page/Home/Home';
// import Detailed from './page/Routes/Detailed';
// import MovieDetail from './page/Routes/MovieDetail';
// import { FavoritesProvider } from "./components/Favourite/FavoriteMoviesContext" // Import the context provider

// function App() {
//   return (
//     <FavoritesProvider> 
//       <BrowserRouter>
//         <Nav />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/detailed" element={<Detailed />} />
//           <Route path="/movie/:genre/:id" element={<MovieDetail />} />
//         </Routes>
//       </BrowserRouter>
//     </FavoritesProvider>
//   );
// }

// export default App;

// App.js
// import React from 'react';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Nav from './components/Nav/Nav';
// import Home from './page/Home/Home';
// import Detailed from './page/Routes/Detailed';
// import MovieDetail from './page/Routes/MovieDetail';
// import { HorrorMoviesProvider } from "./components/Favourite/FavoriteMoviesContext"; // Import the horror movies context provider
// import { ComedyMoviesProvider } from "./components/Favourite/FavoriteMoviesContext"; // Import the comedy movies context provider

// function App() {
//   return (
//     <BrowserRouter>
//       <Nav />
//       {/* Wrap the Routes with both HorrorMoviesProvider and ComedyMoviesProvider */}
//       <HorrorMoviesProvider>
//         <ComedyMoviesProvider>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/detailed" element={<Detailed />} />
//             <Route path="/movie/:genre/:id" element={<MovieDetail />} />
//           </Routes>
//         </ComedyMoviesProvider>
//       </HorrorMoviesProvider>
//     </BrowserRouter>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import Home from './page/Home/Home';
import Detailed from './page/Routes/Detailed';
import MovieDetail from './page/Routes/MovieDetail';
import { HorrorMoviesProvider, useHorrorFavorites } from "./components/Favourite/FavoriteMoviesContext"; // Import the horror movies context provider and hook
import { ComedyMoviesProvider, useComedyFavorites } from "./components/Favourite/FavoriteMoviesContext"; // Import the comedy movies context provider and hook

function App() {
  // Use the useHorrorFavorites and useComedyFavorites hooks to get the counts

  return (
    <BrowserRouter>
      {/* Pass the totalFavoritesCount as a prop to the Nav component */}
      {/* Wrap the Routes with both HorrorMoviesProvider and ComedyMoviesProvider */}
      <HorrorMoviesProvider>
        <ComedyMoviesProvider>
      <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detailed" element={<Detailed />} />
            <Route path="/movie/:genre/:id" element={<MovieDetail />} />
          </Routes>
        </ComedyMoviesProvider>
      </HorrorMoviesProvider>
    </BrowserRouter>
  );
}

export default App;
