
import React, { useEffect, useState } from 'react';
import "../style/Movie.css"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaCircle, FaPlay } from 'react-icons/fa'
import { Link } from 'react-router-dom';

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
    setHorrorIndex((prevIndex) => (prevIndex + 6) % Math.max(0, horrorMovies.length - 6));
  };

  const goToPrevHorrorMovie = () => {
    setHorrorIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, horrorMovies.length - 6) : prevIndex - 1
    );
  };

  const goToNextComedyMovie = () => {
    setComedyIndex((prevIndex) => (prevIndex + 6) % Math.max(0, comedyMovies.length - 6));
  };

  const goToPrevComedyMovie = () => {
    setComedyIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, comedyMovies.length - 6) : prevIndex - 1
    );
  };

  return (
    <>
      <div className='movies-container flex flex-col gap-8'>
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
                    <img src={movie.posterURL} alt={movie.title} className="movie-poster h-48 w-full rounded-t-xl"/>
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

        <div className='genre-container flex flex-col gap-1'>
          <p className='text-blue-100 font-semibold text-xl font-body'>Comedy Movies</p>
          <div className="movie-list flex gap-4 w-full">
            <button className="arrow-btn left-arrow p-2 text-white z-0 w-10 bg-gradient-to-r from-black" onClick={goToPrevComedyMovie}>
              <IoIosArrowBack className='text-2xl' />
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
                  <div className="movie-details bg-custom h-96 w-72 z-10 p-0 rounded-xl">
                    <img src={movie.posterURL} alt={movie.title} className="movie-poster h-48 w-full rounded-t-xl"/>
                    <div className='p-2 px-4 flex gap-2'>
                      <button className='text-black bg-white px-10 py-3 h-12 w-48 font-bold rounded p-2 flex gap-3'><FaPlay className='relative h-3 top-1.5 w-3 left' />Watch now</button>
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
            <button className="arrow-btn right-arrow text-white" onClick={goToNextComedyMovie}>
              <IoIosArrowForward className='arrow text-2xl h-full w-full relative bg-gradient-to-l from-black' />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}


// import React, { useEffect, useState } from 'react';
// import "../style/Movie.css"
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { FaPlay } from 'react-icons/fa'
// import { Link } from 'react-router-dom';

// function Movies() {
//   const [horrorMovies, setHorrorMovies] = useState([]);
//   const [comedyMovies, setComedyMovies] = useState([]);
//   const [horrorIndex, setHorrorIndex] = useState(0);
//   const [comedyIndex, setComedyIndex] = useState(0);
//   const [hoveredMovie, setHoveredMovie] = useState(null);
//   const [showMovieDetails, setShowMovieDetails] = useState(false);

//   const fetchMovies = async (genre, setterFunction) => {
//     try {
//       const resp = await fetch(`https://api.sampleapis.com/movies/${genre}`);
//       const json = await resp.json();
//       setterFunction(json);
//     } catch (error) {
//       console.error(`Error fetching ${genre} movies:`, error);
//     }
//   }

//   useEffect(() => {
//     fetchMovies('animation', setHorrorMovies);
//     fetchMovies('family', setComedyMovies); 
//   }, []);

//   const handleMouseEnter = (movie) => {
//     setHoveredMovie(movie);
//     setTimeout(() => {
//       setShowMovieDetails(true);
//     }, 800);
//   };

//   const handleMouseLeave = () => {
//     setHoveredMovie(null);
//     setShowMovieDetails(false);
//   };

//   return (
//     <>
//       <div className='movies-container flex flex-col gap-8'>
//         <div className='genre-container flex flex-col gap-1'>
//           <p className='text-blue-100 font-semibold text-xl font-body'>Horror Movies</p>
//           <div className="movie-list flex gap-4 w-full relative left-14">
//             {horrorMovies.slice(horrorIndex, horrorIndex + 8).map((movie) => (
//               <div
//                 key={movie.id}
//                 className="movie-slide"
//                 onMouseEnter={() => handleMouseEnter(movie)}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <img
//                   src={movie.posterURL}
//                   alt={movie.title}
//                   className="movie-poster h-52 rounded"
//                 />
//                 {hoveredMovie === movie && showMovieDetails && (
//                   <div className="movie-details bg-black h-96 w-72 z-20">
//                     <img src={movie.posterURL} alt={movie.title} className="movie-poster h-60 w-full bg-contain"/>
//                     <div className='p-2 px-4 flex gap-2'>
//                       <Link to={`/detailed/${movie.id}`}>
//                         <button className='text-black bg-white px-6 w-40 font-bold rounded p-2 flex gap-3'>
//                           <FaPlay className='relative h-3 top-1.5 w-3 left'/>Watch now
//                         </button>
//                       </Link>
//                       <button className='bg-white/55 p-2 w-10 rounded'>+</button>
//                     </div>
//                     <h3 className='text-white font-bold text-center'>2024 2h16min UA</h3>
//                     <p className='text-blue-gray-custom truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo dolores numquam natus aliquam maiores consequatur, reprehenderit vitae reiciendis</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className='genre-container flex flex-col gap-1'>
//           <p className='text-blue-100 font-semibold text-xl font-body'>Comedy Movies</p>
//           <div className="movie-list flex gap-4 w-full relative left-14">
//             {comedyMovies.slice(comedyIndex, comedyIndex + 8).map((movie) => (
//               <div
//                 key={movie.id}
//                 className="movie-slide"
//                 onMouseEnter={() => handleMouseEnter(movie)}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <img
//                   src={movie.posterURL}
//                   alt={movie.title}
//                   className="movie-poster h-52 rounded"
//                 />
//                 {hoveredMovie === movie && showMovieDetails && (
//                   <div className="movie-details bg-black h-96 w-72 z-20">
//                     <img src={movie.posterURL} alt={movie.title} className="movie-poster h-60 w-full bg-contain"/>
//                     <div className='p-2 px-4 flex gap-2'>
//                       <Link to={`/detailed/${movie.id}`}>
//                         <button className='text-black bg-white px-6 w-40 font-bold rounded p-2 flex gap-3'>
//                           <FaPlay className='relative h-3 top-1.5 w-3 left'/>Watch now
//                         </button>
//                       </Link>
//                       <button className='bg-white/55 p-2 w-10 rounded'>+</button>
//                     </div>
//                     <h3 className='text-white font-bold text-center'>2024 2h16min UA</h3>
//                     <p className='text-blue-gray-custom truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo dolores numquam natus aliquam maiores consequatur, reprehenderit vitae reiciendis</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Movies