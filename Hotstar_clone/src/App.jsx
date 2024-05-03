import Nav from "./components/Nav"
import Home from "./page/Home"
import Movies from "./services/Movies"
// import Images from "./components/Images"
import InsideOut from "./page/InsideOut"
import Languages from "./components/Languages"
import Footer from "./components/Footer"
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailed" element={<InsideOut />} />
        </Routes>
      </BrowserRouter>
        {/* <Languages/>
        <Footer/> */}
    </>
  )
}

export default App

