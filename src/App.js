//------------- components imports ------------
import './assets/styles.css'
import Home from './views/home'
import Navbar from './components/navbar'
import { Link, animateScroll as scroll } from "react-scroll";
import About from './views/About';
function App() {
  return (
    <div className="App">
        <Home />
        <Navbar />
        <About />
    </div>
  );
}

export default App;
