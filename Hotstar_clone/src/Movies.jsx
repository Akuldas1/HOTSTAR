

import React, { useEffect, useState } from 'react';
import "./Movie.css"

export default function Movies() {
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  
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
    fetchMovies('horror', setHorrorMovies);
    fetchMovies('comedy', setComedyMovies);
  }, []);

  return (
    <div className='movies-container flex flex-col gap-8'>
      <div className='genre-container'>
        <p className='text-white font-bold text-3xl'>Horror</p>
        <div className="movie-list flex gap-4 flex-grow overflow-x-scroll">
          {horrorMovies.map(movie => (
            <img
              src={movie.posterURL}
              alt={movie.title}
              className="movie-poster h-64 rounded hover:scale-125"
            />
          ))}
        </div>
      </div>
      <div className='genre-container'>
        <p className='text-white font-bold text-3xl'>Comedy</p>
        <div className="movie-list flex gap-4 flex-grow overflow-x-scroll">
          {comedyMovies.map(movie => (
            <img
              src={movie.posterURL}
              alt={movie.title}
              className="movie-poster h-52"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
