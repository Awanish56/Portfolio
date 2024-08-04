import { Route, Routes } from "react-router-dom";
import Carousel from "./Component/carousel";
import Navbar from "./Component/navbar";
import About from "./Component/about";
import Skills from "./Component/skills";
import Project from "./Component/project";
import Contact from "./Component/contact";
import Footer from "./Component/footer";

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <About />
      <Skills />
      <Project /> 
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
