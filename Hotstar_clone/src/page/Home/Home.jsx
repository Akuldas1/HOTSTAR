import video from '../../assets/video/video.mp4'
import { FaCircle, FaPlay } from 'react-icons/fa'
import { PiSpeakerSlash, PiSpeakerHighLight } from "react-icons/pi";
import { useState } from 'react'
import Languages from '../../components/Languages/Languages';
import Footer from '../../components/Footer/Footer';
import HorrorMovies from '../../components/Movies/HorrorMovies';
import ComedyMovies from '../../components/Movies/ComedyMovies';
import "../Home/Home.css"
import Disneyy from '../../components/Disney/Disney';
import Image from '../../components/Images/Images'

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
        className='mute-toggle text-xl px-8 py-3.5 rounded-xl '
        onClick={toggleMute}
      >
        {isMuted ? <PiSpeakerSlash className='unmute fill-white' /> : <PiSpeakerHighLight className='mute fill-white mobiles:hidden tablets:hidden laptops:block desktop:block'/>}
      </button>
      <div className='video h-2/3'>
        <img src={movieInfo.src} className='absolute left-28 top-10 desktop:mt-24 mobiles:hidden laptops:block desktop:block'></img>
        <ul className='home-ul text-white flex gap-4 absolute left-28 top-60 font-body font-bold mobiles:w-5 mobiles:flex mobiles:gap-0.5 mobiles:top-10 mobiles:text-xs tablets:w-4 tablets:top-10 laptops:w-full laptops:top-60 laptops:text-base desktop:mt-24'>
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
        <div className='desc mobiles:hidden tablets:block laptops:block'>
          <p className='text-gray-300 absolute left-28 top-72 w-1/3 font-body desktop:mt-24 tablets:hidden laptops:block'>{movieInfo.description}</p>
          <p className='text-white absolute top-96 left-28  font-semibold font-body desktop:mt-24 tablets:hidden laptops:block'>{movieInfo.genre}</p>
        </div>

        <div className=''>
          <button type='button' className='subscribe text-white text-xl font-bold left-28 px-8 py-3.5 rounded-xl font-body hover:scale-105 hover:bg-white/50 desktop:mt-24'><FaPlay className='play absolute h-7 w-3 left-14' /> Subscribe to watch</button>
          <button type='button' className='plus text-white font-bold text-lg px-6 py-3.5 rounded-xl desktop:mt-24'>+</button>
          <div className='component mobiles:hidden tablets:hidden laptops:block desktop:block desktop:mt-24'>
            <Image movieInfo={movieInfo} updateMovieInfo={updateMovieInfo} />
          </div>
          <div className='flex flex-col gap-8'>
            {/* <Movies /> */}
            <HorrorMovies />
            <ComedyMovies />
          </div>
          <div className='relative bottom-40 h-10 left-28 flex flex-col gap-3'>
            <p className='text-blue-100 font-semibold text-xl font-body mobiles:hidden tablets:hidden laptops:block'>Popular Languages</p>
            <div className='mobiles:hidden tablets:hidden laptops:block desktop:block z-10'>
              <Languages />
            </div>
          </div>
          <div className='flex flex-col gap-16'>
            <Disneyy />
            <Footer />
          </div>
        </div>
      </div>
    </>
  )
}
export default Home

// import video from '../../assets/video/video.mp4'
// import { FaCircle, FaPlay } from 'react-icons/fa'
// import { PiSpeakerSlash, PiSpeakerHighLight } from "react-icons/pi";
// import { useState } from 'react'
// import Languages from '../../components/Languages/Languages';
// import Footer from '../../components/Footer/Footer';
// import HorrorMovies from '../../components/Movies/HorrorMovies';
// import ComedyMovies from '../../components/Movies/ComedyMovies';
// import "../Home/Home.css"
// import Disneyy from '../../components/Disney/Disney';
// import Image from '../../components/Images/Images'

// function Home() {

//   const [isMuted, setIsMuted] = useState(true);
//   const toggleMute = () => {
//     setIsMuted(prevMuted => !prevMuted);
//   };

//   const [movieInfo, setMovieInfo] = useState({
//     video: video,
//     src: 'https://img10.hotstar.com/image/upload/f_auto,h_156/sources/r1/cms/prod/218/1640218-t-af2c7898f613',
//     year: "2023",
//     duration: "2h 26min",
//     languages: "5 Languages",
//     certification: "U",
//     description: "Every fight begins with a failure! Braving against the odds, Manoj Kumar Sharma puts it all on the line to crack the nation’s much sought-after exam: UPSC.",
//     genre: "Biopic | Common-Man Struggles | Underdog | Thought-provoking"
//   });

//   const updateMovieInfo = (newInfo) => {
//     setMovieInfo(newInfo);
//   };

//   return (
//     <>
//       <div className='video-player'>
//         <video src={movieInfo.video} autoPlay loop muted={isMuted} className='w-full bg-gradient-to-b from-black' />
//       </div>
//       <button
//         type=''
//         className='mute-toggle text-xl px-8 py-3.5 rounded-xl '
//         onClick={toggleMute}
//       >
//         {isMuted ? <PiSpeakerSlash className='unmute fill-white' /> : <PiSpeakerHighLight className='mute fill-white mobiles:hidden tablets:hidden laptops:block desktop:block' />}
//       </button>
//       <div className='video h-2/3'>
//         <img src={movieInfo.src} className='home-img absolute left-28 top-10 mobiles:hidden tablets:block desktop:block tablets:h-20 laptops:h-auto'></img>
//         <ul className='home-ul text-white flex gap-4 absolute left-28 top-60 font-body font-bold mobiles:text-xs mobiles:flex mobiles:gap-1 tablets:text-sm laptops:text-base desktop:text-base mobiles:absolute mobiles:top-0 mobiles:left-28 tablets:absolute tablets:top-80 tablets:left-28 laptops:absolute laptops:top-60'>
//           <li>{movieInfo.year}</li>
//           <FaCircle className='h-2 relative top-2'></FaCircle>
//           <li>{movieInfo.duration}</li>
//           <FaCircle className='h-2 relative top-2'></FaCircle>
//           <li>{movieInfo.languages}</li>
//           <FaCircle className='h-2 relative top-2'></FaCircle>
//           <li className='bg-white/25 h-6 w-auto px-1 rounded'>{movieInfo.certification}</li>
//         </ul>
//         <br></br>
//         <br></br><br></br>
//         <div className='desc'>
//           <p className='text-gray-300 absolute left-28 top-72 w-1/3 font-body mobiles:hidden tablets:hidden laptops:block desktop:block'>{movieInfo.description}</p>
//           <p className='text-white absolute top-96 left-28  font-semibold font-body mobiles:hidden tablets:hidden laptops:block desktop:block'>{movieInfo.genre}</p>
//         </div>

//         <div className=''>
//             <button type='button' className='subscribe text-white text-xl font-bold left-28 px-12 py-3.5 rounded-xl font-body hover:scale-105 hover:bg-white/50 mobiles:absoute mobiles:top-10 mobiles:w-auto mobiles:h-14 mobiles:text-lg mobiles:p-1 tablets:absolute tablets:top-40 tablets:w-auto laptops:w-80 laptops:absolute laptops:top-2/3'><FaPlay className='play absolute h-7 w-3 left-12 mobiles:hidden tablets:hidden laptops:block desktop:block'/> Subscribe to watch</button>
//             <button type='button' className='plus text-white font-bold text-lg px-6 py-3.5 rounded-xl mobiles:absoute mobiles:top-20 mobiles:left-28 mobiles:w-auto  tablets:absolute tablets:top-60 tablets:left-28 tablets:w-auto laptops:w-auto laptops:absolute laptops:left-1/3 laptops:top-2/3 laptops:ml-6'>+</button>
//           <div className='component tablets:absolute tablets:left-28 tablets:top-96 laptops:absolute laptops:top-2/3 laptops:left-2/4 laptops:mt-2 laptops:ml-12'>
//             <Image movieInfo={movieInfo} updateMovieInfo={updateMovieInfo} />
//           </div>
//           <div className='flex flex-col gap-8'>
//             {/* <Movies /> */}
//             <HorrorMovies />
//             <ComedyMovies />
//           </div>
//           <div className='relative bottom-40 h-10 left-28 flex flex-col gap-3'>
//             <p className='text-blue-100 font-semibold text-xl font-body mobiles:relative mobiles:top-20 tablets:hidden laptops:block laptops:top-0'>Popular Languages</p>
//             <div className='mobiles:relative mobiles:top-20 laptops:realtive laptops:top-0.5'>
//               <Languages />
//             </div>
//           </div>
//           <div className='flex flex-col gap-16 desktop'>
//             <Disneyy />
//             <Footer />
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
// export default Home



