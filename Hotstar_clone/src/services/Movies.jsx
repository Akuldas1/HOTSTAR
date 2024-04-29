
// import React, { useEffect, useState } from 'react';
// import "../style/Movie.css"

// export default function Movies() {
//   const [horrorMovies, setHorrorMovies] = useState([]);
//   const [comedyMovies, setComedyMovies] = useState([]);

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
//     fetchMovies('horror', setHorrorMovies);
//     fetchMovies('comedy', setComedyMovies);
//   }, []);

//   return (
//     <>
//     <div className='movies-container flex flex-col gap-8 desktop:relative bottom-80'>
//       <div className='genre-container grid grid-col gap-2 tablets:grid grid-col-7 '>
//         <p className='text-white font-bold text-3xl font-body desktop: text-2xl'>Horror</p>
//         <div className="movie-list flex gap-4 flex-grow">
//           {horrorMovies.map(movie => (

//             <img
//             key={movie.id}
//               src={movie.posterURL}
//               alt={movie.title}
//               className="movie-poster h-64 rounded hover:scale-125"
//             />
//           ))}
//         </div>
//       </div>
//       <div className='genre-container'>
//         <p className='text-white font-bold text-3xl'>Comedy</p>
//         <div className="movie-list flex gap-4 flex-grow overflow-x-scroll">
//           {comedyMovies.map(movie => (
//             <img
//             key={movie.id}
//               src={movie.posterURL}
//               alt={movie.title}
//               className="movie-poster h-52"
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//     </>
//   );
// }



import React, { useEffect, useState } from 'react';
import "../style/Movie.css"
import { FaArrowLeft, FaArrowRight, FaGreaterThan} from 'react-icons/fa';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";


export default function Movies() {
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
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
    fetchMovies('comedy', setHorrorMovies);
  }, []);

  const goToNextMovie = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 6) % Math.max(0, horrorMovies.length - 6));
  };

  const goToPrevMovie = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, horrorMovies.length - 6) : prevIndex - 1
    );
  };

  return (
    <>
      <div className='movies-container flex flex-col gap-8'>
        <div className='genre-container flex flex-col gap-1'>
          <p className='text-blue-100 font-semibold text-xl font-body'>Horror</p>
          <div className="movie-list flex gap-4">
            <button className="arrow-btn left-arrow p-2 text-white z-10 w-10 bg-gradient-to-r from-black" onClick={goToPrevMovie}>
              {/* <FaLessThan /> */}
              <IoIosArrowBack className='text-2xl'/>
            </button>
            {horrorMovies.slice(currentIndex, currentIndex + 6).map((movie) => (
              <div
                key={movie.id}
                className="movie-slide"
                onMouseEnter={() => setHoveredMovie(movie)}
                onMouseLeave={() => setHoveredMovie(null)}
              >
                <img
                  src={movie.posterURL}
                  alt={movie.title}
                  className="movie-poster h-60 rounded hover:scale-125"
                />
                {hoveredMovie === movie && (
                  <div className="movie-details bg-black h-96 w-72 z-20">
                    <img src={movie.posterURL} alt={movie.title} className="movie-poster h-64 w-72" />
                    <div className='p-2 px-4 flex gap-2'>
                      <button className='text-black bg-white w-3/4 p-2 font-bold rounded'>Watch now</button>
                      <button className='bg-white/55 p-2 w-10 rounded'>+</button>
                    </div>
                    <h3 className='text-white font-bold text-center'>2024 2h16min UA</h3>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque explicabo dolores numquam natus aliquam maiores consequatur, reprehenderit vitae reiciendis</p>
                  </div>
                )}
              </div>
            ))}
            <button className="arrow-btn right-arrow text-white z-50 relative right-9" onClick={goToNextMovie}>
            <IoIosArrowForward className='text-2xl'/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
