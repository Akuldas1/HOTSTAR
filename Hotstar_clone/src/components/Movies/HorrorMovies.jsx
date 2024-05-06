import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCircle, FaPlay } from 'react-icons/fa';
import { fetchMovies } from '../../api/fetchMovies';

const HorrorMovies = () => {
    const [horrorMovies, setHorrorMovies] = useState([]);
    const [horrorIndex, setHorrorIndex] = useState(0);
    const [hoveredMovie, setHoveredMovie] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const horrorData = await fetchMovies('animation');
            setHorrorMovies(horrorData);
        };

        fetchData();
    }, []);

    const goToNextHorrorMovie = () => {
        setHorrorIndex((prevIndex) => (prevIndex + 6) % Math.max(0, horrorMovies.length - 6));
    };

    const goToPrevHorrorMovie = () => {
        setHorrorIndex((prevIndex) =>
            prevIndex === 0 ? Math.max(0, horrorMovies.length - 6) : prevIndex - 1
        );
    };

    return (
        <div className='movies-container'>
            <div className='genre-container flex flex-col gap-1'>
                <p className='text-blue-100 font-semibold text-xl font-body'>Horror Movies</p>
                <div className="movie-list flex gap-4 w-full">
                    <button className="arrow-btn left-arrow p-2 text-white z-10 w-10" onClick={goToPrevHorrorMovie}>
                        <IoIosArrowBack className='text-2xl' />
                    </button>
                    {horrorMovies.slice(horrorIndex, horrorIndex + 8).map((movie, index) => (
                        <div
                            key={movie.id}
                            className="movie-slide"
                            onMouseEnter={() => setHoveredMovie(movie)}
                            onMouseLeave={() => setHoveredMovie(null)}
                        >
                            <img
                                src={movie.posterURL}
                                alt={movie.title}
                                className="movie-poster h-52 rounded"
                            />
                            {hoveredMovie === movie && (
                                <div className="movie-details bg-custom h-96 w-72 z-10 p-0 rounded-xl">
                                    <img src={movie.posterURL} alt={movie.title} className="movie-poster h-48 w-full rounded-t-xl" />
                                    <div className='p-2 px-4 flex gap-2'>
                                        {index === 0 ? (
                                            <Link to={`/detailed/${movie.id}`}>
                                                <button className='text-black bg-white px-10 py-3 h-12 w-48 font-bold rounded p-2 flex gap-3'>
                                                    <FaPlay className='relative h-3 top-1.5 w-3 left' />Watch now
                                                </button>
                                            </Link>
                                        ) : (
                                            <button className='text-black bg-white px-10 py-3 h-12 w-48 font-bold rounded p-2 flex gap-3'>
                                                <FaPlay className='relative h-3 top-1.5 w-3 left' />Watch now
                                            </button>
                                        )}
                                        <button className='bg-white/55 p-2 w-12 rounded'>+</button>
                                    </div>

                                    <ul className='text-white flex font-body font-semibold text-left px-5'>
                                        <li>2023 </li>
                                        <FaCircle className='h-1 relative top-2.5'></FaCircle>
                                        <li>2h 26min</li>
                                        <FaCircle className='h-1 relative top-2.5'></FaCircle>
                                        <li>5 Languages</li>
                                    </ul>
                                    <p className='text-blue-gray-custom text-pretty text-left px-5 truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo dolores numquam natus aliquam maiores </p>
                                </div>
                            )}
                        </div>
                    ))}
                    <button className="arrow-btn right-arrow text-white" onClick={goToNextHorrorMovie}>
                        <IoIosArrowForward className='arrow text-2xl h-full w-full relative bg-gradient-to-l from-black' />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HorrorMovies;


