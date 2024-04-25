import video from './assets/video2.mp4'
 import './App.css'
 import "./Front.css"
import { FaCircle, FaExclamationCircle, FaPlay } from 'react-icons/fa'
function Front() {
  return (
    <>
      <div className='video h-2/3'>
        <img src='https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/218/1640218-t-af2c7898f613' className='absolute left-28 top-10'></img>
        <ul className='text-white flex gap-4 absolute left-28 top-1/3 font-body font-bold'>
          <li>2023 </li>
          <FaCircle className='h-2 relative top-2'></FaCircle>
          <li>2h 26min</li>
          <FaCircle className='h-2 relative top-2'></FaCircle>
          <li>5 Languages</li>
          <FaCircle className='h-2 relative top-2'></FaCircle>
          <li className='bg-white/25 h-6 w-5 px-1 rounded'>U</li>
        </ul>
        <div className=''>
        <p className='text-gray-300 absolute left-28 top-64 w-1/3 font-body'>Every fight begins with a failure! Braving against the odds, Manoj Kumar Sharma puts it all on the line to crack the nation’s much sought-after exam: UPSC.</p>
        <p className='crm text-white absolute left-28  font-bold font-body'>Biopic | Common-Man Struggles | Underdog | Thought-provoking</p>
        </div>
        <div className=''>
         <button type='button' className='subscribe text-white font-bold absolute left-28  px-7 py-3 rounded-xl font-body'> Subscribe to watch</button> 
          <button type='button' className='plus text-white font-bold text-lg absolute px-5 py-2.5 rounded-xl'>+</button>
        </div>
        <video src={video} autoPlay loop muted />
      </div>
    </>
  )
}
export default Front