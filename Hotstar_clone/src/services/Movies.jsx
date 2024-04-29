
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
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Movies() {
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredMovie, setHoveredMovie] = useState(null); // State to track hovered movie

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
    setCurrentIndex((prevIndex) => (prevIndex + 5) % Math.max(0, horrorMovies.length - 5));
  };

  const goToPrevMovie = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(0, horrorMovies.length - 9) : prevIndex - 1
    );
  };

  return (
    <>
      <div className='movies-container flex flex-col gap-8 desktop:relative bottom-80'>
        <div className='genre-container grid grid-col gap-2 tablets:grid grid-col-7 '>
          <p className='text-white font-bold text-3xl font-body desktop: text-2xl'>Horror</p>
          <div className="movie-list flex relative gap-4 flex-grow">
            <button className="arrow-btn left-arrow text-white" onClick={goToPrevMovie}>
              <FaArrowLeft/>
            </button>
            {horrorMovies.slice(currentIndex, currentIndex + 7).map((movie) => (
              <div 
                key={movie.id} 
                className="movie-slide" 
                onMouseEnter={() => setHoveredMovie(movie)}
                onMouseLeave={() => setHoveredMovie(null)}
              >
                <img
                  src={movie.posterURL}
                  alt={movie.title}
                  className="movie-poster h-64 rounded hover:scale-125"
                />
                {hoveredMovie === movie && (
                  <div className="movie-details bg-white/5 h-96 w-96">
                    <h3>{movie.title}</h3>
                    <p>{movie.imdbId}</p>
                  </div>
                )}
              </div>
            ))}
            <button className="arrow-btn right-arrow text-white" onClick={goToNextMovie}>
             <FaArrowRight/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}


//////////////////
// import React, { useEffect, useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import "../style/Movie.css";

// function Movies() {
//   const [horrorMovies , setHorrorMovies]= useState([]);

//   useEffect(() => {
//     fetch('https://api.sampleapis.com/movies/horror')
//       .then(response => response.json())
//       .then(data => setHorrorMovies(data))
//       .catch(err => console.log(err)); 
//   }, []);

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 1
//   };

//   return (
//     <>
//       <div className="slider-container ml-48">
//         <Slider {...settings}>
//           {horrorMovies.map(movie => (
//             <div key={movie.id}>
//               <img src={movie.posterURL} alt={movie.title} />
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </>
//   ); 
// }

// export default Movies;




