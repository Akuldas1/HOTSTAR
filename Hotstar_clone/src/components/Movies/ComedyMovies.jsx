import React, { useEffect, useState } from 'react';
import { useComedyFavorites } from '../Favourite/FavoriteMoviesContext';
import { fetchMovies } from '../../api/fetchMovies';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCircle, FaPlay } from 'react-icons/fa';
import { PiStarFill } from "react-icons/pi";
import Modal from '../ModalComponent/ModalComponent';
import "../Movies/Movie.css"

const ComedyMovies = () => {
    const genre = 'comedy';
    const { comedyFavorites, addToComedyFavorites, removeFromComedyFavorites } = useComedyFavorites();
    const [comedyMovies, setComedyMovies] = useState([]);
    const [comedyIndex, setComedyIndex] = useState(0);
    const [hoveredMovie, setHoveredMovie] = useState(null);
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            const comedyData = await fetchMovies('comedy');
            setComedyMovies(comedyData);
        };

        fetchData();
    }, []);

    const goToNextComedyMovie = () => {
        setComedyIndex((prevIndex) => (prevIndex + 6) % Math.max(0, comedyMovies.length - 6));
    };

    const goToPrevComedyMovie = () => {
        setComedyIndex((prevIndex) =>
            prevIndex === 0 ? Math.max(0, comedyMovies.length - 6) : prevIndex - 1
        );
    };

    const handleFavoriteClick = (movie) => {
        const isFavorite = comedyFavorites.some((favMovie) => favMovie.id === movie.id);
        if (isFavorite) {
            removeFromComedyFavorites(movie.id);
        } else {
            addToComedyFavorites(movie);
        }
        setShowModal(true); 
    };


    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <div className='absolute top-6 left-28'>
                <Modal show={showModal} onClose={closeModal} />
            </div>
            <div className='movies-container mobiles:grid-cols-5'>
                <div className='genre-container flex flex-col gap-1 flex-grow'>
                    <p className='text-blue-100 font-semibold text-xl font-body'>Comedy Movies</p>
                    <div className="movie-list flex gap-2 w-full flex-grow">
                        <button className="arrow-btn left-arrow p-2 text-white z-10 w-10" onClick={goToPrevComedyMovie}>
                            <IoIosArrowBack className='text-2xl' />
                        </button>
                        {/* {comedyMovies.slice(comedyIndex, comedyIndex + 8).map((movie) => ( */}
                        {comedyMovies.slice(comedyIndex, comedyIndex + (window.innerWidth <= 768 ? 3 : 8)).map((movie, index) => (

                            <div
                                key={movie.id}
                                className="movie-slide w-full"
                                onMouseEnter={() => setHoveredMovie(movie)}
                                onMouseLeave={() => setHoveredMovie(null)}
                            >
                                <img
                                    src={movie.posterURL}
                                    alt={movie.title}
                                    className="movie-poster h-52 rounded desktop:h-64"
                                    onError={() => {
                                        setComedyMovies(prevMovies => prevMovies.filter(m => m.id !== movie.id));
                                    }}
                                />
                                {hoveredMovie === movie && (
                                    <div className="movie-details bg-custom h-96 w-72 z-10 p-0 rounded-xl">
                                        <img src={movie.posterURL} alt={movie.title} className="movie-poster h-48 w-full rounded-t-xl"/>
                                        <button
                                            className="favourites"
                                            style={{ color: comedyFavorites.some((favMovie) => favMovie.id === movie.id) ? 'yellow' : 'initial' }}
                                            onClick={() => handleFavoriteClick(movie)}
                                        >
                                            <PiStarFill className='absolute top-3 left-60 h-7 w-7' />
                                        </button>
                                        <div class="gradient-overlay"></div>
                                        <div className='p-2 px-4 flex gap-2 relative bottom-6'>
                                            <Link to={`/movie/${genre}/${movie.id}`} className='text-black bg-white px-10 py-3 h-12 w-48 font-bold rounded p-2 flex gap-3'>
                                                <FaPlay className='relative h-3 top-1.5 w-3 left' />Watch now
                                            </Link>
                                            <button className='bg-white/55 p-2 w-12 rounded'>+</button>
                                        </div>
                                        <ul className='text-white flex font-body font-semibold text-left px-5 relative bottom-6'>
                                            <li>2023 </li>
                                            <FaCircle className='h-1 relative top-2.5'></FaCircle>
                                            <li>2h 26min</li>
                                            <FaCircle className='h-1 relative top-2.5'></FaCircle>
                                            <li>5 Languages</li>
                                        </ul>
                                        <p className='text-blue-gray-custom text-pretty text-left px-5 truncate relative bottom-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo dolores numquam natus aliquam maiores </p>
                                    </div>
                                )}
                            </div>
                        ))}
                        <button className="arrow-btn right-arrow text-white" onClick={goToNextComedyMovie}>
                            <IoIosArrowForward className='arrow text-2xl' />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ComedyMovies;
