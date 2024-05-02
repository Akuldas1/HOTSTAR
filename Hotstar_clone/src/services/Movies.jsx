

import React, { useEffect, useState } from 'react';
import "../style/Movie.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCircle, FaPlay } from 'react-icons/fa'

export default function Movies() {
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [horrorIndex, setHorrorIndex] = useState(0);
  const [comedyIndex, setComedyIndex] = useState(0);
  const [hoveredMovie, setHoveredMovie] = useState(null);

  const fetchMovies = async (genre, setterFunction) => {
    try {
      const resp = await fetch(`https://api.sampleapis.com/movies/${genre}`);
      const json = await resp.json();
      setterFunction(json);
    } catch (error) {
      console.error(`Error fetching ${genre} movies:`, error);
    }
  }

  useEffect(() => {
    fetchMovies('animation', setHorrorMovies);
    fetchMovies('family', setComedyMovies); 
  }, []);



  const goToNextHorrorMovie = () => {
    setHorrorIndex((prevIndex) => (prevIndex + 6) % Math.max(0, horrorMovies.length-6));
  };

  const goToPrevHorrorMovie = () => {
    setHorrorIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, horrorMovies.length-6) : prevIndex - 1
    );
  };

  const goToNextComedyMovie = () => {
    setComedyIndex((prevIndex) => (prevIndex + 6) % Math.max(0, comedyMovies.length-6));
  };

  const goToPrevComedyMovie = () => {
    setComedyIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, comedyMovies.length-6) : prevIndex - 1
    );
  };


  return (
    <>
      <div className='movies-container flex flex-col gap-8'>
        <div className='genre-container flex flex-col gap-1'>
          <p className='text-blue-100 font-semibold text-xl font-body'>Horror Movies</p>
          <div className="movie-list flex gap-4 w-full">
            <button className="arrow-btn left-arrow p-2 text-white z-10 w-10" onClick={goToPrevHorrorMovie}>
              <IoIosArrowBack className='text-2xl'/>
            </button>
            {horrorMovies.slice(horrorIndex, horrorIndex + 8).map((movie) => (
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
                  <div className="movie-details bg-black h-96 w-72 z-20">
                    <img src={movie.posterURL} alt={movie.title} className="movie-poster h-60 w-72 bg-fill"/>
                    <div className='p-2 px-4 flex gap-2'>
                      <button className='text-black bg-white w-3/4 pl-9 font-bold rounded p-2 flex gap-3'><FaPlay className='relative h-3 top-1.5 w-3 left'/>Watch now</button>
                      <button className='bg-white/55 p-2 w-10 rounded'>+</button>
                    </div>
                    <h3 className='text-white font-bold text-center'>2024 2h16min UA</h3>
                    <p className='text-white truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo dolores numquam natus aliquam maiores consequatur, reprehenderit vitae reiciendis</p>
                  </div>
                )}
              </div>
            ))}
            <button className="arrow-btn right-arrow text-white" onClick={goToNextHorrorMovie}>
              <IoIosArrowForward className='arrow text-2xl h-full w-full relative bg-gradient-to-l from-black'/>
            </button>
          </div>
        </div>
        
        <div className='genre-container flex flex-col gap-1'>
          <p className='text-blue-100 font-semibold text-xl font-body'>Comedy Movies</p>
          <div className="movie-list flex gap-4 w-full">
            <button className="arrow-btn left-arrow p-2 text-white z-10 w-10 bg-gradient-to-r from-black" onClick={goToPrevComedyMovie}>
              <IoIosArrowBack className='text-2xl'/>
            </button>
            {comedyMovies.slice(comedyIndex, comedyIndex + 8).map((movie) => (
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
                  <div className="movie-details bg-black h-96 w-72 z-20">
                    <img src={movie.posterURL} alt={movie.title} className="movie-poster h-60 w-72" />
                    <div className='p-2 px-4 flex gap-2'>
                      <button className='text-black bg-white w-3/4 pl-9 font-bold rounded p-2 flex gap-3'><FaPlay className='relative h-3 top-1.5 w-3 left'/>Watch now</button>
                      <button className='bg-white/55 p-2 w-10 rounded'>+</button>
                    </div>
                    <h3 className='text-white font-bold text-center'>2024  2h16min UA</h3>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo dolores numquam natus aliquam maiores consequatur, reprehenderit vitae reiciendis</p>
                  </div>
                )}
              </div>
            ))}
            <button className="arrow-btn right-arrow text-white" onClick={goToNextComedyMovie}>
              <IoIosArrowForward className='arrow text-2xl h-full w-full relative bg-gradient-to-l from-black'/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
