
import React from 'react';
import { useFavorites } from '../Favourite/FavoriteMoviesContext';
import "../ModalComponent/ModalComponent.css"
const Modal = ({ show, onClose }) => {
    const { favorites } = useFavorites();
   
    return (
        show && (
            <div className="modal">
                <div className="modal-content flex flex-col gap-5">
                    <div className='flex gap-2'>
                        <p className='font-bold text-3xl font-body h-11 bg-green-800 rounded py-1 px-5 w-full'>Favorites</p>
                        &nbsp;
                        <span className="close mt-3.5 p-1 font-bold text-white" onClick={onClose}>&times;</span>
                    </div>

                    <div className='flex flex-row gap-5'>
                        {favorites.map((movie) => (
                            <div key={movie.id} className="">
                                <img
                                    src={movie.posterURL}
                                    alt={movie.title}
                                    className="h-60 w-44 rounded"/>  
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    );
}

export default Modal;


// import React, { useEffect } from 'react';

// const ModalComponent = ({ show, onClose, favorites }) => {
//   useEffect(() => {
//     const handleKeyDown = (event) => {
//       if (event.key === 'Escape') {
//         onClose();
//       }
//     };

//     document.addEventListener('keydown', handleKeyDown);

//     return () => {
//       document.removeEventListener('keydown', handleKeyDown);
//     };
//   }, [onClose]);

//   return (
//     <>
//       {show && (
//         <div className="modal">
//           <div className="modal-content flex flex-col gap-5">
//                     <div className='flex gap-2'>
//                         <p className='font-bold text-3xl font-body h-11 bg-green-800 rounded py-1 px-5 w-full'>Favorites</p>
//                         &nbsp;
//                         <span className="close mt-3.5 p-1 font-bold text-white" onClick={onClose}>&times;</span>
//                     </div>

//                     <div className='flex flex-row gap-5'>
//                         {favorites.map((movie) => (
//                             <div key={movie.id} className="">
//                                 <img
//                                     src={movie.posterURL}
//                                     alt={movie.title}
//                                     className="h-60 w-44 rounded"/>  
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//           <button className="modal-close" onClick={onClose}>
//             Close
//           </button>
//         </div>
//       )}
//       {show && (
//         <div className="modal-overlay" onClick={onClose}></div>
//       )}
//     </>
//   );
// };

// export default ModalComponent;
