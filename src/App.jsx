import { useEffect } from 'react';
import Navigation from "./components/Navigation";
import Profile from './components/Profile';
import Language from "./components/Language";
import Project from "./components/Project";
import Tools from "./components/Tools";
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      disable: function () {
        var maxWidth = 768;
        return window.innerWidth < maxWidth;
      },
      duration: 1200,
      easing: "ease-in-out", 
      once: true, 
      mirror: true,
      anchorPlacement: "top-bottom",
  });
}, []);

  return (
    <div className="bg-[#0C0C0C]">
      <div  className="font-poppins px-6 lg:px-36 min-h-screen">
        <Navigation />
        <Profile />
        <Language />
        <Project />
        <Tools />
      </div>
      <Footer />
    </div>
  )
}

export default App;
