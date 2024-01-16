import Button from "./button";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";



export default function Nav() {
    const navigate = useNavigate()
    return (
        <>
        <Toaster/>
            <nav className="bg-yellow-200 p-3  grid grid-cols-2 gap-2 fixed z-50">
                <div className="grid grid-cols-4 gap-4">
                <div className="grid grid-cols-2 gap-4">
                    <h1 className="lg text-[10px] ps-3  sm:text-[20px] mt-2 md:ps-18"><a className="no-underline text-black  hover:text-red-600" href="#">{"<SIDDARTH/>"}</a></h1>
                </div>
                </div>
                <div className="grid grid-cols-5 gap-1 ">
                <div className="text-[7px] sm:text-[10px] mt-2 md:text-lg"> <a className="no-underline hover:text-red-600" href="#">Home</a></div>
                <div className="text-[7px] sm:text-[10px] mt-2 md:text-lg"><a className="no-underline hover:text-red-600"  href="#about-section">About</a></div>
                <div className="text-[7px] sm:text-[10px] mt-2 md:text-lg"><a className="no-underline hover:text-red-600"  href="#skill-section">Skills</a></div>
                <div className="text-[7px] sm:text-[10px] mt-2 md:text-lg"><a className="no-underline hover:text-red-600" href="#project-section">Projects</a> </div>
                <div className="text-[7px] sm:text-[10px] mt-2 md:text-lg"><a className="no-underline  hover:text-red-600" href="#contact">Contact</a></div>
                </div>
            </nav>
        </>
    );
}