import "./index.css"
import Nav from "./components/nav";
import Home from "./page/home";
import Skills from "./page/skills";
import About from "./page/about";
import Projects from "./page/projects";
import Footer from "./components/footer";
import { Route,BrowserRouter, Routes } from "react-router-dom";
import Contact from "./page/contact";

export default function App(){
  return(
    <>
   <BrowserRouter>
   <Nav/>
   <Home/>
   <About/>
   <Skills/>
   <Projects/>
   <Contact/>
   <Footer/>
   
   <Routes>
   </Routes>
   </BrowserRouter>
    </>
  );
}