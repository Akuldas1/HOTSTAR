import Nav from "./components/Nav"
import Home from "./page/Home"
import InsideOut from "./page/InsideOut"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detailed/1" element={<InsideOut />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

