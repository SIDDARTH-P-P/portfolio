export default function Skills() {
    return (
        <>
        <div  id="skill-section">
                <div className="lg:mt-10 mb-10 mt-6 justify-center flex">
                    <h1 className="lg:text-[28px] md:text-[22px] phone:text-[18px] phone:mt-[60px] sm:text-[20px] md:mt-[100px] hd">Skills</h1>
                </div>
                <div className="justify-center flex">
                    {/* <p className="flex justify-center phone:8 md:px-28 lg:px-44 phone:text-[7px] sm:text-[12px] md:text-[16px]">
Entry-level MERN stack developer with proficiency in React.js, Node.js, and MongoDB, capable of full-stack development, API design, and version control using Git. Strong problem-solving skills, collaborative mindset, and a commitment to clean code</p> */}
                </div>
                <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2  phone:px-4 phone2:px-8 phone2:grid-cols-2 md:px-28 lg:px-44 mt-10 phone:mt-2">
                    <div className="bor mb-5">
                        <div className="flex justify-center">
                            <img className=" mt-4 w-[35px]" src="./frontend.svg" alt="" />
                        </div>
                        <h1 className=" flex justify-center mt-6 lg:text-[24px] md:text-[22px] sm:text-[20px] phone:text-[18px]">Front-End</h1>
                        <div className="ps-[60px] mb-8">
                            <h3 className="lg:text-[16px] md:text-[14px] sm:text-[13px] phone2:text-[15px] phone:text-[15px]"><span><img className="w-[25px]" src="./html.svg" alt="" /></span> HTML</h3>
                            <h3 className="lg:text-[16px] md:text-[14px] sm:text-[13px] phone2:text-[15px] phone:text-[15px]"><span><img className="w-[25px]" src="./css.svg" alt="" /></span>CSS</h3>
                            <h3 className="lg:text-[16px] md:text-[14px] sm:text-[13px] phone2:text-[15px] phone:text-[15px]"><span><img className="w-[25px]" src="./bootstarp.svg" alt="" /> </span>Bootstrap</h3>
                            <h3 className="lg:text-[16px] md:text-[14px] sm:text-[13px] phone2:text-[15px] phone:text-[15px]"><span><img className="w-[25px]" src="./tailwind.svg" alt="" /></span>Tailwind css</h3>
                        </div>
                    </div>

                    <div className="bor mb-5">
                        <div className="flex justify-center">
                            <img className="mt-4 w-[35px]" src="./backend.svg" alt="" />
                        </div>
                        <h1 className="flex justify-center mt-6 lg:text-[24px] md:text-[22px] sm:text-[20px] phone:text-[18px]">Back-End</h1>
                        <div className="ps-[60px] mb-8">
                        <h3 className="lg:text-[16px] md:text-[14px] sm:text-[13px] phone2:text-[15px] phone:text-[15px]"><span><img className="w-[25px]" src="./express.svg" alt="" /> </span>Express js</h3>
                        <h3 className="lg:text-[16px] md:text-[14px] sm:text-[13px] phone2:text-[15px] phone:text-[15px]"><span><img className="w-[25px]" src="./node.svg" alt="" /> </span>Express js</h3>
                        </div>
                    </div>

                    <div className="bor mb-5">
                        <div className="flex justify-center">
                            <img className="mt-4 w-[35px] phone:w-[28px]" src="./others.svg" alt="" />
                        </div>
                        <h1 className="flex justify-center mt-6 lg:text-[24px] md:text-[22px] sm:text-[20px] phone:text-[18px]">Others</h1>
                        <div className="ps-[60px] mb-8">
                        <h3 className="lg:text-[16px] md:text-[14px] sm:text-[13px] phone2:text-[15px] phone:text-[15px]"><span><img className="w-[25px]" src="./mongo.svg" alt="" /> </span>Mongo db</h3>
                        <h3 className="lg:text-[16px] md:text-[14px] sm:text-[13px] phone2:text-[15px] phone:text-[15px]"><span><img className="w-[25px]" src="./sql.svg" alt="" /> </span>MYSQL</h3>
                        </div>
                    </div>
                </div>
                </div>
        </>
    );
}