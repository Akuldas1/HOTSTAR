
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
