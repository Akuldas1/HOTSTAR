import video from './assets/video.mp4'
function Front() {
  return (
    <>
      <div className='video'>
        <video src={video} autoPlay loop muted></video>
      </div>
    </>
  )
}
export default Front