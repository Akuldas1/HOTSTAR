
// import React from 'react';

// const Modal = ({ show, onClose, movie }) => {
//     return (
//         show && (
//             <div className="modal">
//                 <div className="modal-content">
//                     <span className="close" onClick={onClose}>&times;</span>
//                     <p>{movie.title}</p>
//                     {/* Add other details of selected movie */}
//                 </div>
//             </div>
//         )
//     );
// }

// export default Modal;

// Modal.js
import React from 'react';
import { useFavorites } from '../Favourite/FavoriteMoviesContext';
import { Link } from 'react-router-dom';
import { FaCircle, FaPlay } from 'react-icons/fa';

const Modal = ({ show, onClose }) => {
    const { favorites } = useFavorites();

    return (
        show && (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={onClose}>&times;</span>
                    <p className='font-bold text-3xl font-body'>Favorites</p>
                    {/* <ul>
                        {favorites.map((movie) => (
                            <li key={movie.id}>{movie.title}</li>
                        ))}
                    </ul>
                     */}
                    <div className='grid grid-cols-6 gap-2'>
                    {favorites.map((movie) => (
                        <div key={movie.id}>
                            <div className="bg-custom h-52 w-44 z-10 p-0 rounded-xl">
                                <img src={movie.posterURL} className='h-28 w-full rounded-t-xl'/>
                                <div className='flex p-1 gap-1'>
                                        <Link to={`/movie/${movie.id}`} className='text-black bg-white px-2 py-1 h-8 w-48 font-bold rounded p-2 flex gap-3'>
                                            <FaPlay className='relative h-3 top-1.5 w-3 left' />Watch now
                                        </Link>
                                        <button className='bg-white/55 w-12 rounded'>+</button>
                                    </div>
                                    <ul className='text-white flex gap-1 font-body text-xs text-left px-1 truncate'>
                                        <li>2023 </li>
                                        <FaCircle className='h-1 relative top-1.5'></FaCircle>
                                        <li>2h 26min</li>
                                        <FaCircle className='h-1 relative top-1.5'></FaCircle>
                                        <li>5 Languages</li>
                                    </ul>
                                    <p className='text-blue-gray-custom text-left text-xs px-5 truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aliquid laborum praesentium, repudiandae repellat rem et</p>

                            </div>
                        </div>
                    ))}
                    </div>


                </div>
            </div>
        )
    );
}

export default Modal;


// <div className="movie-details bg-custom h-96 w-72 z-10 p-0 rounded-xl">
// <img src={movie.posterURL} alt={movie.title} className="movie-poster h-48 w-full rounded-t-xl" />
// <button className='favourites' onClick={() => handleFavoriteClick(movie)}><PiStarFill className='absolute top-3 left-60 h-7 w-7' /></button>
// <div class="gradient-overlay"></div>
// <div className='p-2 px-4 flex gap-2'>
//     <button className='text-black bg-white px-10 py-3 h-12 w-48 font-bold rounded p-2 flex gap-3' onClick={() => handleWatchNowClick(movie)}>
//         <FaPlay className='relative h-3 top-1.5 w-3 left' />Watch now
//     </button>
//     <button className='bg-white/55 p-2 w-12 rounded'>+</button>
// </div>
// <ul className='text-white flex font-body font-semibold text-left px-5'>
//     <li>2023 </li>
//     <FaCircle className='h-1 relative top-2.5'></FaCircle>
//     <li>2h 26min</li>
//     <FaCircle className='h-1 relative top-2.5'></FaCircle>
//     <li>5 Languages</li>
// </ul>
// <p className='text-blue-gray-custom text-pretty text-left px-5 truncate'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde aliquid laborum praesentium, repudiandae repellat rem et</p>
// </div>