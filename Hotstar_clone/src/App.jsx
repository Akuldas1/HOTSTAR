// import Nav from "./components/Nav/Nav";
// import Home from "./page/Home/Home"
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Nav />
//         <Routes>
//           <Route path="/" element={<Home/>}/>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App

import Nav from "./components/Nav/Nav";
import Home from "./page/Home/Home"
import Detailed from "./page/Routes/Detailed";
import MovieDetail from "./page/Routes/MovieDetail";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/detailed" element={<Detailed/>}/> 
          <Route path="/movie/:id" element={<MovieDetail/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

