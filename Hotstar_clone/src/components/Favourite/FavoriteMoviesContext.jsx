import { createContext, useContext, useState, useEffect } from 'react';

const HorrorMoviesContext = createContext();
const ComedyMoviesContext = createContext();

const COMEDY_FAVORITES_KEY = 'comedyFavorites';
const HORROR_FAVORITES_KEY = 'horrorFavorites';

export const HorrorMoviesProvider = ({ children }) => {
    const [horrorFavorites, setHorrorFavorites] = useState(() => {
        const storedFavorites = localStorage.getItem(HORROR_FAVORITES_KEY);
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });
    const [horrorCount, setHorrorCount] = useState(0);

    useEffect(() => {
        setHorrorCount(horrorFavorites.length);
        localStorage.setItem(HORROR_FAVORITES_KEY, JSON.stringify(horrorFavorites));
    }, [horrorFavorites]);

    const addToHorrorFavorites = (movie) => {
        setHorrorFavorites((prevFavorites) => [...prevFavorites, movie]);
    };

    const removeFromHorrorFavorites = (movieId) => {
        setHorrorFavorites((prevFavorites) =>
            prevFavorites.filter((movie) => movie.id !== movieId)
        );
    };

    return (
        <HorrorMoviesContext.Provider
            value={{ horrorFavorites, horrorCount, addToHorrorFavorites, removeFromHorrorFavorites }}
        >
            {children}
        </HorrorMoviesContext.Provider>
    );
};

export const useHorrorFavorites = () => useContext(HorrorMoviesContext);


export const ComedyMoviesProvider = ({ children }) => {
    const [comedyFavorites, setComedyFavorites] = useState(() => {
        const storedFavorites = localStorage.getItem(COMEDY_FAVORITES_KEY);
        return storedFavorites ? JSON.parse(storedFavorites) : [];
    });
    const [comedyCount, setComedyCount] = useState(0);

    useEffect(() => {
        setComedyCount(comedyFavorites.length);
        localStorage.setItem(COMEDY_FAVORITES_KEY, JSON.stringify(comedyFavorites));
    }, [comedyFavorites]);

    const addToComedyFavorites = (movie) => {
        setComedyFavorites((prevFavorites) => [...prevFavorites, movie]);
    };

    const removeFromComedyFavorites = (movieId) => {
        setComedyFavorites((prevFavorites) =>
            prevFavorites.filter((movie) => movie.id !== movieId)
        );
    };

    return (
        <ComedyMoviesContext.Provider
            value={{ comedyFavorites, comedyCount,addToComedyFavorites, removeFromComedyFavorites }}
        >
            {children}
        </ComedyMoviesContext.Provider>
    );
};

export const useComedyFavorites = () => useContext(ComedyMoviesContext);
