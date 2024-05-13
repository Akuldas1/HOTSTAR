import { createContext, useContext, useState, useEffect } from 'react';

const HorrorMoviesContext = createContext();

export const HorrorMoviesProvider = ({ children }) => {
    const [horrorFavorites, setHorrorFavorites] = useState([]);
    const [horrorCount, setHorrorCount] = useState(0);

    useEffect(() => {
        setHorrorCount(horrorFavorites.length);
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


const ComedyMoviesContext = createContext();

export const ComedyMoviesProvider = ({ children }) => {
    const [comedyFavorites, setComedyFavorites] = useState([]);
    const [comedyCount, setComedyCount] = useState(0);

    useEffect(() => {
        setComedyCount(comedyFavorites.length);
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