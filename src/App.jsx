import "./index.css"
import Nav from "./components/nav";
import Home from "./page/home";
import Skills from "./page/skills";
import About from "./page/about";
import { Route,BrowserRouter, Routes } from "react-router-dom";

export default function App(){
  return(
    <>
   <BrowserRouter>
   <Nav/>
   <Home/>
   <About/>
   <Skills/>
   <Routes>
    <Route path="/skills" element={<Skills/>}/>
    <Route path="/about" element={<About/>}/>
   </Routes>
   </BrowserRouter>
    </>
  );
}