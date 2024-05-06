import { useState } from 'react';
import { FaCircle, FaPlay } from 'react-icons/fa'
import { PiSpeakerSlash, PiSpeakerHighLight } from "react-icons/pi";
import vid from "../assets/video/video-2.mp4"

function InsideOut(){
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(prevMuted => !prevMuted);
  };

    return(
      <>
      <video src={vid} autoPlay loop muted={isMuted} className='' />

      <button
        type=''
        className='mute-toggle text-xl px-8 py-3.5 rounded-xl '
        onClick={toggleMute}
      >
        {isMuted ? <PiSpeakerSlash className='unmute fill-white' /> : <PiSpeakerHighLight className='mute fill-white' />}
      </button>
        <div>
        <img src="https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/2736/1372736-t-7377aad02e68" className="absolute left-28 top-10"></img>
        <ul className='text-white flex gap-4 absolute left-28 top-60 font-body font-bold'>
          <li>2015</li>
          <FaCircle className='h-2 relative top-2'></FaCircle>
          <li>1h 34min</li>
          <FaCircle className='h-2 relative top-2'></FaCircle>
          <li>5 Languages</li>
          <FaCircle className='h-2 relative top-2'></FaCircle>
          <li className='bg-white/25 h-6 w-18 px-1 rounded'>U/A 7+</li>
        </ul>
          <p className="text-gray-300 absolute left-28 top-72 w-1/3 font-body">When Riley's family relocates to a new city, the five emotions located in her mind have a difficult job at hand to save their and Riley's existence.</p>
          <p className='text-white absolute top-96 left-28  font-semibold font-body'>Animation &nbsp; |&nbsp; Kids &nbsp; | &nbsp; Fantasy &nbsp; | &nbsp;Adventure</p>  
          <button type='button' className='subscribe text-black bg-white text-xl font-bold left-28 px-8 py-3.5 rounded-xl font-body hover:scale-105'><FaPlay className='absolute h-7 w-3 left-14'/> Subscribe to watch</button> 
          <button type='button' className='plus text-white font-bold text-lg px-6 py-3.5 rounded-xl'>+</button>
        </div>
        <div className='text-white'>
        <p className='text-blue-100 font-semibold text-xl font-body relative left-28'>More Like This</p>
        <hr></hr>
        
        </div>
        </>
    )
}
export default InsideOut