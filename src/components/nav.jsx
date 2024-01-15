import Button from "./button";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";



export default function Nav() {
    const navigate = useNavigate()
    return (
        <>
        <Toaster/>
            <nav class="bg-yellow-200 p-3  grid grid-cols-2 gap-2">
                <div class="grid grid-cols-4 gap-4">
                <div class="grid grid-cols-2 gap-4">
                    <h1 className="text-[10px] ps-3  sm:text-[20px] mt-2 md:ps-18">{"<SIDDARTH/>"}</h1>
                </div>
                </div>
                <div class="grid grid-cols-5 gap-1 ">
                <div class="text-[7px] sm:text-[10px] mt-2 md:text-lg" onClick={()=> navigate("/")}>Home</div>
                <div class="text-[7px] sm:text-[10px] mt-2 md:text-lg" onClick={()=> toast.error("currently not avilable")}>About</div>
                <div class="text-[7px] sm:text-[10px] mt-2 md:text-lg" onClick={()=> navigate("/skills")}>Skills</div>
                <div class="text-[7px] sm:text-[10px] mt-2 md:text-lg" onClick={()=> toast.error("currently not avilable")}>Projects</div>
                <div class="text-[7px] sm:text-[10px] mt-2 md:text-lg" onClick={()=> toast.error("currently not avilable")}>Contact</div>
                </div>
            </nav>
        </>
    );
}