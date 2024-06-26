
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaCircle, FaPlay } from 'react-icons/fa'
import "../../page/Routes/Detailed.css"
import HorrorMovies from '../../components/Movies/HorrorMovies';
import Footer from "../../components/Footer/Footer"

const MovieDetail = () => {
  const { id , genre } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const resp = await fetch(`https://api.sampleapis.com/movies/${genre}/${id}`);
        const json = await resp.json();
        setMovie(json);
      } catch (error) {
        console.error(`Error fetching movie details:`, error);
      }
    };

    fetchMovieDetail();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return(
 <>

      <p className='text-white font-body font-bold text-7xl italic absolute top-56 left-28 w-full z-10'>{movie.title}</p>
      <div className='video-player-container'>
      <img src={movie.posterURL} alt={movie.title} className='h-screen relative w-full'/>
      </div>

  <div className='flex flex-col gap-56'>
      <div className=''>
        <ul className='det-ul text-white flex gap-4 font-body font-bold'>
          <li>2015</li>
          <FaCircle className='h-2 relative top-2'></FaCircle>
          <li>1h 34min</li>
          <FaCircle className='h-2 relative top-2'></FaCircle>
          <li>5 Languages</li>
          <FaCircle className='h-2 relative top-2'></FaCircle>
          <li className='bg-white/25 h-6 w-18 px-1 rounded'>U/A 7+</li>
        </ul>
        <p className="det-p text-gray-300 w-1/3 font-body mobiles:hidden tablets:hidden laptops:block">When Riley's family relocates to a new city, the five emotions located in her mind have a difficult job at hand to save their and Riley's existence.</p>
        <p className='det-p2 text-white font-semibold font-body mobiles:hidden tablets:hidden laptops:block'>Animation &nbsp; |&nbsp; Kids &nbsp; | &nbsp; Fantasy &nbsp; | &nbsp;Adventure</p>
        <button type='button' className='text-black relative left-28 bottom-32 bg-white text-xl font-semibold  px-20 py-3.5 rounded-xl font-body hover:scale-105'><FaPlay className='absolute h-7 w-3 left-14' /> Subscribe to watch</button>
        <button type='button' className='text-black bg-white/30 font-bold text-lg px-6 py-3.5 rounded-xl relative left-32 bottom-32'>+</button>
      </div>



      <div className='text-white flex gap-10 absolute '>
        <p className='text-white font-semibold text-xl font-body relative left-28'>More Like This</p>
        <p className='text-white font-semibold text-xl font-body relative left-28'>Trailers & More</p>
      </div>
      <div className=''>
          <HorrorMovies />
        </div>
      
    <div className='relative bottom-96 left-28'>
        <p className='text-blue-100 font-semibold text-xl font-body'>Trailers & More</p>
        <div className='show w-48'>
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/6890/626890-h" className='h-28' />
            <p id="trailer" className='text-zinc-100 font-semibold text-lg font-body'>Inside-Out Trailer</p>
            <button className='absolute bottom-8 left-2'><FaPlay className='fill-white h-3' /></button>
        </div>  
      </div>
         <div className='hide bg-custom rounded'>
             <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/6890/626890-h" className='h-28'/>
              <p id="trailer-hidden" className='p-1 text-zinc-100 text-sm font-semibold font-body'>Inside-Out Trailer</p>
              <button className='absolute bottom-8 left-2'><FaPlay className='fill-white h-3' /></button>
         </div>
  </div>
      <div>
        <Footer/>
      </div>
      </>
  );
}

export default MovieDetail;
