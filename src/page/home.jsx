import Skills from "./skills";

export default function Home() {
    return (
        <>
                <div className="grid grid-cols-2 gap-2">
                    <div>
                        <h1 className="animate-charcter phone:text-[10px] phone:ms-5 sm:text-[19px] md:mt-12 tab:text-[21px] tab:ms-10 large:mt-28 large:text-[35px] phone:mt-14">I AM SIDDARTH</h1>
                        <p className="phone:ms-5 large:ms-[40px] sm:text-[10px]  phone:text-[5px] md:text-[12px] large:text-[20px] tab:ms-10 phone2:text-[8px]">A Passionate Full Stack Software Developer have an experience of <br /> building Web applications with JavaScript / Reactjs / Nodejs and <br /> some other cool libararies and framework</p>
                        <img className="mt-5 md:w-[35px] md:ms-6 sm:ms-3 sm:mt-2 sm:w-[25px]  large:w-[40px] large:ms-10 phone:w-[15px] phone:ms-4 phone:mt-1" src="./mongo.svg" alt="" />
                        <img className="md:ms-5 md:w-[35px] large:w-[40px] sm:w-[25px] phone:w-[15px] phone:ms-2" src="./express.svg" alt="" />
                        <img className="md:ms-5 md:w-[35px] large:w-[40px] sm:w-[25px] phone:w-[15px] phone:ms-2" src="./react.svg" alt="" />
                        <img className="md:ms-5 md:w-[35px] large:w-[40px] sm:w-[25px] phone:w-[15px] phone:ms-2" src="./node.svg" alt="" />
                    </div>
                    <div>
                        <div className="bg-yellow-400 absolute rounded-full phone:w-[100px] phone:h-[115px] phone:ms-[30px] phone:mt-7 phone2:ms-[100px] sm:w-[140px] sm:ms-[130px] sm:h-[155px] md:w-[160px] md:h-[195px]  md:ms-[165px] md:mt-12 tab:ms-[190px] large:w-[240px] large:ms[220px] large:h-[245px] large:mt-28"></div>
                        <div className="bg-yellow-400 absolute rounded-full phone:w-[100px] phone:h-[115px] phone:ms-[69px] phone:mt-7 phone2:ms-[130px] sm:w-[140px] sm:ms-[160px] sm:h-[155px] md:w-[160px] md:h-[195px]  md:ms-[215px] md:mt-12 tab:ms-[240px] large:w-[240px] large:ms-[270px] large:h-[245px] large:mt-28"></div>
                        <img className="absolute duration-[5s] phone:w-[90px]  phone:ms-14  phone:mt-7 phone:hover:ms-16 phone2:ms-32 phone2:hover:ms-28 sm:ms-[168px] sm:w-[120px] sm:hover:ms-[160px] md:w-[150px] md:ms-[200px] md:mt-12 tab:ms-[225px] large:ms-[280px] large:w-[190px] large:mt-28" src="./profile.png" alt="" />
                    </div>
                </div>
        </>
    );
}
