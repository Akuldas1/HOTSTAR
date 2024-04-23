import video from './assets/video.mp4'
function Front() {
  return (
    <>
      <div className='video'>
        <ul className='text-white flex gap-4 absolute left-28 top-1/3 font-bold'>
          <li>Malayalam</li>
          <li>2024</li>
          <li>U/A 16+</li>
        </ul>
        <p className='text-white absolute left-28 top-64 font-bold w-1/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur unde eligendi facilis tenetur illo voluptate distinctio qui laborum ratione repudiandae, aperiam omnis! Voluptatibus aliquam laborum neque eveniet ullam consequuntur aspernatur.</p>
        <p className='text-white absolute left-28 top-96 font-bold'>Thriller | Crime | Revenge</p>
        <video src={video} autoPlay loop muted />
      </div>
    </>
  )
}
export default Front