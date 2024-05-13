
// // import React from 'react';
// // import { useFavorites } from '../Favourite/FavoriteMoviesContext';
// // import { Link, useParams } from 'react-router-dom';
// // import { FaPlay } from 'react-icons/fa';
// // import { PiStarFill } from "react-icons/pi";
// // import "../ModalComponent/ModalComponent.css"

// // const Modal = ({ show, onClose }) => {
// //     const { favorites, addToFavorites, removeFromFavorites } = useFavorites();
// //     const { genre } = useParams();

// //     const handleFavoriteClick = (movie) => {
// //         const isFavorite = favorites.some((favMovie) => favMovie.id === movie.id);
// //         if (isFavorite) {
// //             removeFromFavorites(movie.id);
// //         } else {
// //             addToFavorites(movie);
// //         }
// //     };

// //     const handleButtonClick = () => {
// //         onClose(); // Close the modal when any button is clicked
// //     };

// //     return (
// //         show && (
// //             <div className="modal">
// //                 <div className="modal-content flex flex-col gap-5">
// //                     <div className='flex gap-2'>
// //                         <p className='font-bold text-3xl font-body h-11 bg-green-800 rounded py-1 px-5 w-full'>Favorites</p>
// //                         &nbsp;
// //                         <span className="close mt-3.5 p-1 font-bold text-white" onClick={onClose}>&times;</span>
// //                     </div>

// //                     <div className='flex flex-row gap-5'>
// //                         {favorites.map((movie) => (
// //                             <div key={movie.id} className="card">
// //                                 <img
// //                                     src={movie.posterURL}
// //                                     alt={movie.title}
// //                                     className="h-60 w-44 rounded"
// //                                 />
// //                                 <div class="card__content text-white flex flex-row place-content-evenly">
// //                                     <Link to={`/movie/${genre}/${movie.id}`}>
// //                                         <button className='button' onClick={handleButtonClick}>
// //                                             <FaPlay className='h-3 w-3' />
// //                                         </button>
// //                                     </Link>
// //                                     <button
// //                                         className="favourites"
// //                                         style={{ color: favorites.some((favMovie) => favMovie.id === movie.id) ? 'yellow' : 'initial' }}
// //                                         onClick={() => {
// //                                             handleFavoriteClick(movie);
// //                                         }}
// //                                     >
// //                                         <PiStarFill className='h-6 w-6 relative bottom-4' />
// //                                     </button>
// //                                     {/* Add onClick event handler to close modal when this button is clicked */}
// //                                     <button onClick={handleButtonClick}>
// //                                         <svg
// //                                             className="stroke-teal-500 h-6 w-6 relative bottom-4"
// //                                             viewBox="0 0 24 24"
// //                                             xmlns="http://www.w3.org/2000/svg"
// //                                         >
// //                                             <path
// //                                                 stroke-width="2"
// //                                                 d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
// //                                             ></path>
// //                                             <path stroke-width="1.5" d="M8 12H16"></path>
// //                                             <path stroke-width="1.5" d="M12 16V8"></path>
// //                                         </svg>
// //                                     </button>
// //                                 </div>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>
// //             </div>
// //         )
// //     );
// // }

// // export default Modal;


// import React from 'react';
// import { useComedyFavorites, useHorrorFavorites } from '../Favourite/FavoriteMoviesContext';
// import { Link, useParams } from 'react-router-dom';
// import { FaPlay } from 'react-icons/fa';
// import { PiStarFill } from "react-icons/pi";
// import "../ModalComponent/ModalComponent.css"

// const Modal = ({ show, onClose }) => {
//     const { genre } = useParams();
//     const horrorFavorites = useHorrorFavorites();
//     const comedyFavorites = useComedyFavorites();

//     // Use the appropriate favorites based on the genre
//     const favorites = genre === 'horror' ? horrorFavorites : comedyFavorites;
//     const handleFavoriteClick = (movie) => {
//         const isFavorite = comedyFavorites.some((favMovie) => favMovie.id === movie.id);
//         if (isFavorite) {
//             removeFromFavorites(movie.id);
//         } else {
//             addToFavorites(movie);
//         }


//     };

//     const handleButtonClick = () => {
//         onClose(); // Close the modal when any button is clicked
//     };

//     return (
//         show && (
//             <div className="modal">
//                 <div className="modal-content flex flex-col gap-5">
                    // <div className='flex gap-2'>
                    //     <p className='font-bold text-3xl font-body h-11 bg-green-800 rounded py-1 px-5 w-full'>Favorites</p>
                    //     &nbsp;
                    //     <span className="close mt-3.5 p-1 font-bold text-white" onClick={onClose}>&times;</span>
                    // </div>

//                     <div className='flex flex-row gap-5'>
//                         {favorites.map((movie) => (
//                             <div key={movie.id} className="card">
//                                 <img
//                                     src={movie.posterURL}
//                                     alt={movie.title}
//                                     className="h-60 w-44 rounded"
//                                 />
//                                 <div class="card__content text-white flex flex-row place-content-evenly">
                                    // <Link to={`/movie/${genre}/${movie.id}`}>
                                    //     <button className='button' onClick={handleButtonClick}>
                                    //         <FaPlay className='h-3 w-3' />
                                    //     </button>
                                    // </Link>
                                    // <button
                                    //     className="favourites"
                                    //     style={{ color: favorites.some((favMovie) => favMovie.id === movie.id) ? 'yellow' : 'initial' }}
                                    //     onClick={() => {
                                    //         handleFavoriteClick(movie);
                                    //     }}
                                    // >
                                    //     <PiStarFill className='h-6 w-6 relative bottom-4' />
                                    // </button>
                                    // {/* Add onClick event handler to close modal when this button is clicked */}
                                    // <button onClick={handleButtonClick}>
                                    //     <svg
                                    //         className="stroke-teal-500 h-6 w-6 relative bottom-4"
                                    //         viewBox="0 0 24 24"
                                    //         xmlns="http://www.w3.org/2000/svg"
                                    //     >
                                    //         <path
                                    //             stroke-width="2"
                                    //             d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                    //         ></path>
                                    //         <path stroke-width="1.5" d="M8 12H16"></path>
                                    //         <path stroke-width="1.5" d="M12 16V8"></path>
                                    //     </svg>
                                    // </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         )
//     );
// }

// export default Modal;

import React from 'react';
import { useHorrorFavorites, useComedyFavorites } from '../Favourite/FavoriteMoviesContext';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import { PiStarFill } from 'react-icons/pi';
import '../ModalComponent/ModalComponent.css'
const Modal = ({ show, onClose }) => {
    const { horrorFavorites, addToHorrorFavorites, removeFromHorrorFavorites } = useHorrorFavorites() || { horrorFavorites: [], addToHorrorFavorites: () => { }, removeFromHorrorFavorites: () => { } };
    const { comedyFavorites, addToComedyFavorites, removeFromComedyFavorites } = useComedyFavorites() || { comedyFavorites: [], addToComedyFavorites: () => { }, removeFromComedyFavorites: () => { } };

    const handleFavoriteClick = (movie, isHorror) => {
        if (isHorror) {
            const isFavorite = horrorFavorites.some((favMovie) => favMovie.id === movie.id);
            if (isFavorite) {
                removeFromHorrorFavorites(movie.id);
            } else {
                addToHorrorFavorites(movie);
            }
        } else {
            const isFavorite = comedyFavorites.some((favMovie) => favMovie.id === movie.id);
            if (isFavorite) {
                removeFromComedyFavorites(movie.id);
            } else {
                addToComedyFavorites(movie);
            }
        }
    };

    const handleButtonClick = () => {
        onClose(); // Close the modal when any button is clicked
    };

    return (
        show && (
            <div className="modal">
                 <div className='flex gap-2'>
                        <p className='font-bold text-3xl font-body h-11 bg-green-800 rounded py-1 px-5 w-full'>Favorites</p>
                        &nbsp;
                        <span className="close mt-3.5 p-1 font-bold text-white" onClick={onClose}>&times;</span>
                    </div>
                <div className="modal-content">  
                    <div className='favorites-container'>
                        <div className='favorites-list'>
                            {horrorFavorites.map((movie) => (
                                <div key={movie.id} className="card ">
                                    <img src={movie.posterURL} alt={movie.title} className="poster" />
                                    <div className="card__content">
                                        <Link to={`/movie/horror/${movie.id}`}>
                                            <button className='button' onClick={handleButtonClick}>
                                                <FaPlay />
                                            </button>
                                        </Link>
                                        <button
                                            className="favorites"
                                            style={{ color: 'yellow' }}
                                            onClick={() => handleFavoriteClick(movie, true)}
                                        >
                                            <PiStarFill className='relative h-6 w-6 bottom-3.5' />
                                        </button>

                                        <button >
                                        <svg
                                            className="stroke-teal-500 h-6 w-6 relative bottom-4"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke-width="2"
                                                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                            ></path>
                                            <path stroke-width="1.5" d="M8 12H16"></path>
                                            <path stroke-width="1.5" d="M12 16V8"></path>
                                        </svg>
                                    </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='favorites-container'>
                        <div className='favorites-list'>
                            {comedyFavorites.map((movie) => (
                                <div key={movie.id} className="card">
                                    <img src={movie.posterURL} alt={movie.title} className="poster" />
                                    <div className="card__content">
                                        <Link to={`/movie/comedy/${movie.id}`}>
                                            <button className='button' onClick={handleButtonClick}>
                                                <FaPlay />
                                            </button>
                                        </Link>
                                        <button
                                            className="favorites"
                                            style={{ color: 'yellow' }}
                                            onClick={() => handleFavoriteClick(movie, false)}
                                        >
                                            <PiStarFill className='relative h-6 w-6 bottom-3.5'/>
                                        </button>

                                        <button >
                                        <svg
                                            className="stroke-teal-500 h-6 w-6 relative bottom-4"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                stroke-width="2"
                                                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                                            ></path>
                                            <path stroke-width="1.5" d="M8 12H16"></path>
                                            <path stroke-width="1.5" d="M12 16V8"></path>
                                        </svg>
                                    </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default Modal;
// onClick={handleButtonClick}