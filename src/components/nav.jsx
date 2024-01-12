import Button from "./button";

export default function Nav() {
    return (
        <>
            <nav class="bg-yellow-200 p-3  grid grid-cols-2 gap-2">
                <div class="grid grid-cols-4 gap-4">
                <div class="grid grid-cols-2 gap-4">
                    <h1 className="text-[10px] ps-3  sm:text-[20px] mt-2 md:ps-18">{"<SIDDARTH/>"}</h1>
                </div>
                </div>
                <div class="grid grid-cols-5 gap-1 ">
                <div class="text-[7px] sm:text-[10px] mt-2 md:text-lg">Home</div>
                <div class="text-[7px] sm:text-[10px] mt-2 md:text-lg">About</div>
                <div class="text-[7px] sm:text-[10px] mt-2 md:text-lg">Skills</div>
                <div class="text-[7px] sm:text-[10px] mt-2 md:text-lg">Projects</div>
                <div class="text-[7px] sm:text-[10px] mt-2 md:text-lg">Contact</div>
                </div>
            </nav>
        </>
    );
}