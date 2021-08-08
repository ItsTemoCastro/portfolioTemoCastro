//------------- components imports ------------
import './assets/styles.css'
import Navbar from './components/navbar'
import { Link, animateScroll as scroll } from "react-scroll";
import Home from './views/home'
import About from './views/About';
import Proyects from './views/Proyects'
function App() {
  return (
    <div className="App">
        <Home />
        <Navbar />
        <About />
        <Proyects />
    </div>
  );
}

export default App;
