import video from './assets/video.mp4'
import './Front.css'
function Front() {
  return (
    <>
      <div className='video h-2/3'>
        <img src='https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/5587/1712744275587-t' className='absolute left-28 top-10'></img>
        <ul className='text-white flex gap-4 absolute left-28 top-1/3 font-bold'>
          <li>Malayalam</li>
          <li>2024</li>
          <li>U/A 16+</li>
        </ul>
        <p className='text-white absolute left-28 top-64 w-1/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur unde eligendi facilis tenetur illo voluptate distinctio qui laborum ratione repudiandae, aperiam omnis! Voluptatibus aliquam laborum neque eveniet ullam consequuntur aspernatur.</p>
        <p className='text-white absolute left-28 top-96 font-bold'>Thriller | Crime | Revenge</p>
        <div className='button flex gap-4'>
          <button type='button' className='subscribe absolute left-28 top-2/3 bg-white px-7 py-4 rounded-xl'>Subscribe to watch</button>
          <button type='button' className='subscribe absolute left-80 top-2/3 bg-white px-5 py-4 rounded-xl'>+</button>
        </div>
        <video src={video} autoPlay loop muted />
      </div>
    </>
  )
}
export default Front