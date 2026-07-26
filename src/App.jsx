import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "../src/assets/css/common-style.css";
import "../src/assets/css/new-style.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import WaterCursor from "./components/WaterCursor";
import SectionDots from "./components/SectionDots";
import "./assets/js/main"

export default function App(){
  return(
    <>
      <WaterCursor/>
      <SectionDots/>
      <Navbar/>
          <Hero/>
          <About/>
          <Skills/>
          <Education/>
          <Experience/>
          <Projects/>
          <Contact/>
      <Footer/>
    </>
  )
}