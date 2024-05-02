import video from '../assets/video2.mp4'
import "../style/Home.css"
import Image from '../components/Images'
import { FaCircle, FaPlay } from 'react-icons/fa'
import { PiSpeakerSlash, PiSpeakerHighLight } from "react-icons/pi";
import Movies from '../services/Movies'
import { useState } from 'react'
function Home() {

  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    setIsMuted(prevMuted => !prevMuted);
  }; 

  return (
    <>
      <video src={video} autoPlay loop muted={isMuted} className=''/>
      <button
          type=''
          className='mute-toggle text-xl px-8 py-3.5 rounded-xl '
          onClick={toggleMute}
        >
          {isMuted ? <PiSpeakerSlash className='unmute fill-white'/> : <PiSpeakerHighLight className='mute fill-white'/>}
        </button>
      <div className='video h-2/3'>
        <img src='https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/218/1640218-t-af2c7898f613' className='absolute left-28 top-10'></img>
        <ul className='text-white flex gap-4 absolute left-28 top-60 font-body font-bold'>
          <li>2023 </li>
          <FaCircle className='h-2 relative top-2'></FaCircle>
          <li>2h 26min</li>
          <FaCircle className='h-2 relative top-2'></FaCircle>
          <li>5 Languages</li>
          <FaCircle className='h-2 relative top-2'></FaCircle>
          <li className='bg-white/25 h-6 w-5 px-1 rounded'>U</li>
        </ul>
        <br></br>
        <br></br><br></br>
        <div className='desc'>
        <p className='text-gray-300 absolute left-28 top-72 w-1/3 font-body'>Every fight begins with a failure! Braving against the odds, Manoj Kumar Sharma puts it all on the line to crack the nation’s much sought-after exam: UPSC.</p>
        <p className='text-white absolute top-96 left-28  font-semibold font-body'>Biopic &nbsp; |&nbsp; Common-Man Struggles &nbsp; | &nbsp; Underdog &nbsp; | &nbsp; Thought-provoking</p>
        </div>
      
        <div className=''>
         <button type='button' className='subscribe text-white text-xl font-bold left-28 px-8 py-3.5 rounded-xl font-body hover:scale-105 hover:bg-white/50'><FaPlay className='absolute h-7 w-3 left-14'/> Subscribe to watch</button> 
          <button type='button' className='plus text-white font-bold text-lg px-6 py-3.5 rounded-xl'>+</button>
          <div className='component'>
          <Image/>
          </div>
        </div>
      </div>
    </>
  )
}
export default Home
