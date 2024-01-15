export default function Skills() {
    return (
        <>
            <div className="lg:mt-36 mt-6 justify-center flex">
                <h1 className="lg:text-[28px] md:text-[22px] phone:text-[18px] phone:mt-[60px] sm:text-[20px] md:mt-[100px]">Skills</h1>
            </div>
            <div className="justify-center flex">
                {/* <p className="flex justify-center phone:8 md:px-28 lg:px-44 phone:text-[7px] sm:text-[12px] md:text-[16px]">
Entry-level MERN stack developer with proficiency in React.js, Node.js, and MongoDB, capable of full-stack development, API design, and version control using Git. Strong problem-solving skills, collaborative mindset, and a commitment to clean code</p> */}
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-2  phone:px-5 phone2:px-8 phone2:grid-cols-2 md:px-28 lg:px-44 mt-10 phone:mt-2">
                <div className="bor">
                    <div className="flex justify-center">
                        <img className=" mt-4 w-[35px]" src="./frontend.svg" alt="" />
                    </div>
                    <h1 className=" flex justify-center mt-6 lg:text-[24px] md:text-[22px] sm:text-[20px] phone:text-[18px]">Froentend</h1>
                    <div className="ps-[60px] mb-5">
                        <h3 className="lg:text-[16px] md:text-[14px] sm:text-[13px] phone2:text-[15px] phone:text-[15px]">HTML</h3>
                        <h3 className="lg:text-[16px] md:text-[14px] sm:text-[13px] phone2:text-[15px] phone:text-[15px]">CSS</h3>
                    </div>
                </div>

                <div className="bor">
                        <div className="flex justify-center">
                            <img className="mt-4 w-[35px]" src="./backend.svg" alt="" />
                        </div>
                        <h1 className="flex justify-center mt-6 lg:text-[24px] md:text-[22px] sm:text-[20px] phone:text-[18px]">Backend</h1>
                        <div className="ps-[60px] mb-5">
                            <h3 className="lg:text-[16px] md:text-[14px] sm:text-[13px] phone2:text-[15px] phone:text-[15px]">Express js</h3>
                            <h3 className="lg:text-[16px] md:text-[14px] sm:text-[13px] phone2:text-[15px] phone:text-[15px]">Node js</h3>
                        </div>
                </div>

                <div className="bor">
                        <div className="flex justify-center">
                            <img className="mt-4 w-[35px] phone:w-[28px]" src="./others.svg" alt="" />
                        </div>
                        <h1 className="flex justify-center mt-6 lg:text-[24px] md:text-[22px] sm:text-[20px] phone:text-[18px]">Others</h1>
                        <div className="ps-[60px] mb-5">
                            <h3 className="lg:text-[16px] md:text-[14px] sm:text-[13px] phone2:text-[15px] phone:text-[15px]">Mongo db</h3>
                            <h3 className="lg:text-[16px] md:text-[14px] sm:text-[13px] phone2:text-[15px] phone:text-[15px]">MYSQL</h3>
                        </div>
                </div>

            </div>
        </>
    );
}