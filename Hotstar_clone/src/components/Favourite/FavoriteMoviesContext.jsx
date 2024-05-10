// // FavoritesContext.js
// import React, { createContext, useContext, useState } from 'react';

// const FavoritesContext = createContext();

// export const FavoritesProvider = ({ children }) => {
//     const [favorites, setFavorites] = useState([]);

//     const addToFavorites = (movie) => {
//         setFavorites((prevFavorites) => [...prevFavorites, movie]);
//     };

//     const removeFromFavorites = (movieId) => {
//         setFavorites((prevFavorites) => prevFavorites.filter((movie) => movie.id !== movieId));
//     };

//     return (
//         <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
//             {children}
//         </FavoritesContext.Provider>
//     );
// };

// export const useFavorites = () => useContext(FavoritesContext);

// FavoritesContext.js
// import React, { createContext, useContext, useState } from 'react';

// const FavoritesContext = createContext();

// export const FavoritesProvider = ({ children }) => {
//     const [favorites, setFavorites] = useState([]);

//     const addToFavorites = (movie) => {
//         setFavorites((prevFavorites) => [...prevFavorites, movie]);
//     };

//     const removeFromFavorites = (movieId) => {
//         setFavorites((prevFavorites) => prevFavorites.filter((movie) => movie.id !== movieId));
//     };

//     return (
//         <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
//             {children}
//         </FavoritesContext.Provider>
//     );
// };

// export const useFavorites = () => useContext(FavoritesContext);


// FavoritesContext.js
// import React, { createContext, useContext, useState , useEffect} from 'react';

// const FavoritesContext = createContext();

// export const FavoritesProvider = ({ children }) => {
//     const [favorites, setFavorites] = useState(
//         JSON.parse(localStorage.getItem('favorites')) || []
//     );

//     useEffect(() => {
//         localStorage.setItem('favorites', JSON.stringify(favorites));
//       }, [favorites]);
    

//     const [favoritesCount, setFavoritesCount] = useState(0); // Add favorites count state

//     const addToFavorites = (movie) => {
//         setFavorites((prevFavorites) => [...prevFavorites, movie]);
//         setFavoritesCount((prevCount) => prevCount + 1); // Increment count when adding to favorites
//     };

//     const removeFromFavorites = (movieId) => {
//         setFavorites((prevFavorites) => prevFavorites.filter((movie) => movie.id !== movieId));
//         setFavoritesCount((prevCount) => prevCount - 1); // Decrement count when removing from favorites
//     };

//     return (
//         <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, favoritesCount }}>
//             {children}
//         </FavoritesContext.Provider>
//     );
// };

// export const useFavorites = () => useContext(FavoritesContext);

// import React, { createContext, useContext, useState, useEffect } from 'react';

// const FavoritesContext = createContext();


import React, { createContext, useContext, useState , useEffect} from 'react';
const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(
        JSON.parse(localStorage.getItem('favorites')) || []
    );

    const [favoritesCount, setFavoritesCount] = useState(favorites.length);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
        setFavoritesCount(favorites.length);
    }, [favorites]);

    const addToFavorites = (movie) => {
        setFavorites((prevFavorites) => [...prevFavorites, movie]);
    };

    const removeFromFavorites = (movieId) => {
        setFavorites((prevFavorites) => prevFavorites.filter((movie) => movie.id !== movieId));
    };

    return (
        <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, favoritesCount }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export const useFavorites = () => useContext(FavoritesContext);
