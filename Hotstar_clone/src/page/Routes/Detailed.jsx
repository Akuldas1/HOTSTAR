import { useEffect, useState } from 'react';
import { FaCircle, FaPlay } from 'react-icons/fa'
import { PiSpeakerSlash, PiSpeakerHighLight } from "react-icons/pi";
import "../Routes/Detailed.css"
import vid from "../../assets/video/video-2.mp4"
import { fetchMovies } from '../../api/fetchMovies';
import Movies from '../../components/Movies/Movies';
import HorrorMovies from '../../components/Movies/HorrorMovies';
import Footer from '../../components/Footer/Footer';
import ComedyMovies from '../../components/Movies/ComedyMovies';
import { Link } from 'react-router-dom';

function Detailed() {
  const [isMuted, setIsMuted] = useState(true);
  const toggleMute = () => {
    setIsMuted(prevMuted => !prevMuted);
  };

  useEffect(() => {
    const fetchData = async () => {
      const comedyData = await fetchMovies('family');
      setComedyMovies(comedyData);
    };

    fetchData();
  }, [])

  return (
    <>
      <div className='video-player-container'>
        <video src={vid} autoPlay loop muted={isMuted} className='h-4/6' />
      </div>
      <button
        type=''
        className='mute-toggle text-xl px-8 py-3.5 rounded-xl '
        onClick={toggleMute}
      >
        {isMuted ? <PiSpeakerSlash className='unmute fill-white' /> : <PiSpeakerHighLight className='mute fill-white' />}
      </button>
      <div>
        <img src="https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/2736/1372736-t-7377aad02e68" className="absolute left-28 top-40"></img>
        <ul className='det-ul text-white flex gap-4 font-body font-bold'>
          <li>2015</li>
          <FaCircle className='h-2 relative top-2'></FaCircle>
          <li>1h 34min</li>
          <FaCircle className='h-2 relative top-2'></FaCircle>
          <li>5 Languages</li>
          <FaCircle className='h-2 relative top-2'></FaCircle>
          <li className='bg-white/25 h-6 w-18 px-1 rounded'>U/A 7+</li>
        </ul>
        <p className="det-p text-gray-300 w-1/3 font-body">When Riley's family relocates to a new city, the five emotions located in her mind have a difficult job at hand to save their and Riley's existence.</p>
        <p className='det-p2 text-white font-semibold font-body'>Animation &nbsp; |&nbsp; Kids &nbsp; | &nbsp; Fantasy &nbsp; | &nbsp;Adventure</p>
        <button type='button' className='det-subscribe text-black bg-white text-xl font-semibold left-28 px-8 py-3.5 rounded-xl font-body hover:scale-105'><FaPlay className='absolute h-7 w-3 left-14' /> Subscribe to watch</button>
        <button type='button' className='det-plus text-black font-bold text-lg px-6 py-3.5 rounded-xl'>+</button>
      </div>
      <div className='text-white flex gap-10'>
        <p className='text-white font-semibold text-xl font-body relative left-28'>More Like This</p>
        <p className='text-white font-semibold text-xl font-body relative left-28'>Trailers & More</p>
      </div>
      <br></br>
      <br></br>
      <div className="line"></div>
      <br></br>
      <br></br>
      <div className='flex flex-col gap-10'>
        {/* <p className='text-blue-100 font-semibold text-xl font-body relative left-28'>More Like This</p> */}
        <div className='relative top-48'>
          <HorrorMovies />
        </div>
        <div className='relative left-28'>
          <p className='text-blue-100 font-semibold text-xl font-body'>Trailers & More</p>
          <div className='show w-48'>
            <img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/6890/626890-h" className='h-28' />
            <p id="trailer" className='text-zinc-100 font-semibold text-lg font-body'>Inside-Out Trailer</p>
            <button className='absolute bottom-8 left-2'><FaPlay className='fill-white h-3' /></button>
          </div>

        
            <div className='hide bg-custom rounded'>
             <Link to=""><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/6890/626890-h" className='h-28'/></Link> 
              <p id="trailer-hidden" className='p-1 text-zinc-100 text-sm font-semibold font-body'>Inside-Out Trailer</p>
              <button className='absolute bottom-8 left-2'><FaPlay className='fill-white h-3' /></button>
            </div>
         
        </div>
        <Footer />
      </div >
    </>
  )
}
export default Detailed