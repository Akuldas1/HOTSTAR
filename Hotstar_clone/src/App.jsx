import Nav from "./components/Nav/Nav";
import Home from "./page/Home/Home"
import Detailed from "./page/Routes/Detailed"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailed/1" element={<Detailed />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

