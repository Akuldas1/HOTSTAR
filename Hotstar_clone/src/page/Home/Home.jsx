import video from '../../assets/video/video.mp4'
import { FaCircle, FaPlay } from 'react-icons/fa'
import { PiSpeakerSlash, PiSpeakerHighLight } from "react-icons/pi";
import { useState } from 'react'
import Image from '../../components/Images/Images'
import HorrorMovies from '../../components/Movies/HorrorMovies';
import ComedyMovies from '../../components/Movies/ComedyMovies';
import Languages from '../../components/Languages/Languages';
import Disneyy from '../../components/Disney/Disney';
import Footer from '../../components/Footer/Footer';
import "../Home/Home.css"

function Home() {

  const [isMuted, setIsMuted] = useState(true);
  const toggleMute = () => {
    setIsMuted(prevMuted => !prevMuted);
  };

  const [movieInfo, setMovieInfo] = useState({
    video: video,
    src: 'https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/218/1640218-t-af2c7898f613',
    year: "2023",
    duration: "2h 26min",
    languages: "5 Languages",
    certification: "U",
    description: "Every fight begins with a failure! Braving against the odds, Manoj Kumar Sharma puts it all on the line to crack the nation’s much sought-after exam: UPSC.",
    genre: "Biopic | Common-Man Struggles | Underdog | Thought-provoking"
  });

  const updateMovieInfo = (newInfo) => {
    setMovieInfo(newInfo);
  };

  return (
    <>
      <div className='video-player'>
        <video src={movieInfo.video} autoPlay loop muted={isMuted} className='w-full bg-gradient-to-b from-black' />
      </div>
      <button
        type=''
        className='mute-toggle text-xl px-8 py-3.5 rounded-xl mobiles:hidden tablets:hidden laptops:block desktop:block'
        onClick={toggleMute}
      >
        {isMuted ? <PiSpeakerSlash className='unmute fill-white' /> : <PiSpeakerHighLight className='mute fill-white mobiles:hidden tablets:hidden laptops:block desktop:block' />}
      </button>
      <div className='video h-2/3'>
        <img src={movieInfo.src} className='home-img absolute left-28 top-10 mobiles:hidden tablets:block desktop:block tablets:h-20 laptops:h-auto desktop:mt-20'></img>
        <ul className='home-ul text-white flex gap-4 absolute left-28 top-60 font-body font-bold mobiles:text-xs mobiles:flex mobiles:gap-1 tablets:text-sm laptops:text-base desktop:text-base mobiles:absolute mobiles:top-0 mobiles:left-28 tablets:absolute tablets:top-80 tablets:left-28 laptops:absolute laptops:top-60  desktop:mt-20'>
          <li>{movieInfo.year}</li>
          <FaCircle className='h-2 relative top-2'></FaCircle>
          <li>{movieInfo.duration}</li>
          <FaCircle className='h-2 relative top-2'></FaCircle>
          <li>{movieInfo.languages}</li>
          <FaCircle className='h-2 relative top-2'></FaCircle>
          <li className='bg-white/25 h-6 w-auto px-1 rounded'>{movieInfo.certification}</li>
        </ul>
        <br></br>
        <br></br><br></br>
        <div className='desc'>
          <p className='text-gray-300 absolute left-28 top-72 w-1/3 font-body mobiles:hidden tablets:hidden laptops:block desktop:block  desktop:mt-20'>{movieInfo.description}</p>
          <p className='text-white absolute top-96 left-28  font-semibold font-body mobiles:hidden tablets:hidden laptops:block desktop:block  desktop:mt-20'>{movieInfo.genre}</p>
        </div>

        <div className=''>
            <button type='button' className='subscribe text-white text-xl font-bold left-28 px-12 py-3.5 rounded-xl font-body hover:scale-105 hover:bg-white/50 mobiles:absoute mobiles:top-10 mobiles:w-auto mobiles:h-14 mobiles:text-lg mobiles:p-1 tablets:absolute tablets:top-40 tablets:w-auto laptops:w-80 laptops:absolute laptops:top-2/3 desktop:w-96 desktop:mt-10'><FaPlay className='play absolute h-7 w-3 left-12 mobiles:hidden tablets:hidden laptops:block desktop:block desktop:left-20'/> Subscribe to watch</button>
            <button type='button' className='plus text-white font-bold text-lg px-6 py-3.5 rounded-xl mobiles:absoute mobiles:top-20 mobiles:left-28 mobiles:w-auto  tablets:absolute tablets:top-60 tablets:left-28 tablets:w-auto laptops:w-auto laptops:absolute laptops:left-1/3 laptops:top-2/3 laptops:ml-6 desktop:mt-10'>+</button>
          <div className='component mobiles:hidden tablets:hidden laptops:block desktop:block tablets:absolute tablets:left-28 tablets:top-96 laptops:absolute laptops:top-2/3 laptops:left-2/4 laptops:mt-2 laptops:ml-12  desktop:mt-14'>
            <Image movieInfo={movieInfo} updateMovieInfo={updateMovieInfo} />
          </div>
          <div className='flex flex-col gap-8'>
            <HorrorMovies />
            <ComedyMovies />
          </div>
          <div className='relative bottom-40 h-10 left-28 flex flex-col gap-3'>
            <p className='text-blue-100 font-semibold text-xl font-body mobiles:relative mobiles:top-20 tablets:hidden laptops:block laptops:top-0'>Popular Languages</p>
            <div className='mobiles:relative mobiles:top-20 laptops:realtive laptops:top-0.5'>
              <Languages />
            </div>
          </div>
          <div className='flex flex-col gap-16 desktop'>
            <Disneyy />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
export default Home



