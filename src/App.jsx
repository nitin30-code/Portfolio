import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import "../src/assets/css/common-style.css";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

export default function App(){
  return(
    <>
      <Navbar/>
          <Hero/>
          <About/>
          <Skills/>
          <Education/>
          <Experience/>
          <Projects/>
      <Footer/>
    </>
  )
}