
export default function About() {
    return (
        <>
        <div id="about-section" className="">
            <div className="abt px-[100px] mt-[70px] sm:mt-[30px] sm:px-[30px] phone:px-[15px] phone:mt-[20px]">
                <div className="grid sm:grid-cols-2 gap-2 bor phone:grid-cols-1 rounded-3xl overflow-hidden">
                    <div className=" flex phone:justify-center bg-yellow-500 md:pt-36">
                        <img className="animate-bounce-slow md:w-[350px] md:h-[400px] sm:w-[260px] sm:h-[280px] phone:w-[250px] phone:h[120px] my-20 phone:me-[90px]" src="./about.png" alt="" />
                    </div>
                    <div className="flex justify-center md:pt-36 phone:py-20 bg-yellow-700 px-5">
                        <h1 className="lg:text-[30px] md:text-[20px] sm:text-[17px] phone:text-[20px]"><span className=" animate-pulse about text-[50px] text-blue-900">About me <br /></span><span className="abt">Hllo! I'm a passionate and self-motivated MERN stack developer eager to kick-start my
                            career in the tech industry. I love building web applications that solve real-world
                            problems and provide meaningful experiences to users</span></h1>
                        <img className=" animate-bounce-slow w-[100px] h-[100px]" src="./about2.png" alt="" />
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}

