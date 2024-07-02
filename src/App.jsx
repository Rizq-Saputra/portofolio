import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import BlogDetail from "./pages/BlogDetail";

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
      <header className="font-poppins px-6 lg:px-36">
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog-detail/:id" element={<BlogDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
