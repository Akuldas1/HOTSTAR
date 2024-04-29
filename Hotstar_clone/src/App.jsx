import Nav from "./components/Nav"
import Home from "./page/Home"
import Movies from "./services/Movies"
// import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return(
    <>
      <Nav />
      <Home />
      <Movies/>
    
    </>
  )
}

export default App