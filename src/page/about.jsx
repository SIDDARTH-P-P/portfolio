
export default function About() {
    return (
        <>
            <div className="px-[100px] mt-[70px] sm:mt-[30px] sm:px-[30px] phone:px-[15px] phone:mt-[20px]">
                <div className="grid sm:grid-cols-2 gap-2 bor phone:grid-cols-1">
                    <div className="flex justify-center bg-gray-400">
                        <h1>About me</h1>
                        <img className="md:w-[350px] md:h-[400px] sm:w-[250px] sm:h-[300px] my-20 bor" src="./siddu.jpeg" alt="" />
                    </div>
                    <div className="flex justify-center pt-36 bg-slate-900">
                        <h1 className="lg:text-[30px] md:text-[20px] sm:text-[17px] phone:text-[10px]">Hllo! I'm a passionate and self-motivated MERN stack developer eager to kick-start my
                            career in the tech industry. I love building web applications that solve real-world
                            problems and provide meaningful experiences to users</h1>
                    </div>
                </div>
            </div>
        </>
    );
}

