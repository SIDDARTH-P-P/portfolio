export default function Projects() {
    return (
        <>
        <div id="project-section"></div>
            <div className="lg:mt-10 mb-10 mt-6 justify-center flex">
                <h1 className="lg:text-[28px] md:text-[22px] phone:text-[18px] phone:mt-[60px] sm:text-[20px] md:mt-[100px] hd">Projects</h1>
            </div>
            <div className="justify-center flex">
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4  phone:px-5 phone2:px-8 phone2:grid-cols-2 md:px-28 lg:px-44 mt-10 phone:mt-2">
                <div className="bor mb-5">
                    <div className="flex justify-center">
                        <img className="bor w-full aspect-video" src="./port.png" alt="" />
                    </div>
                    <h1 className="flex justify-center mt-6 lg:text-[24px] md:text-[22px] sm:text-[20px] phone:text-[18px]">Portfolio</h1>
                    <div className="ps-[60px] mb-8">
                        <span><a href="https://github.com/SIDDARTH-P-P/portfolio"><img className="w-[30px] mt-5" src="./git.svg" alt="" /></a><img className="w-[40px] ms-2" src="./link.svg" alt="" /></span>
                    </div>
                </div>

                <div className="bor mb-5">
                    <div className="flex justify-center">
                        <img className="bor w-full aspect-video" src="./book.jpg" alt="" />
                    </div>
                    <h1 className="flex justify-center mt-6 lg:text-[24px] md:text-[22px] sm:text-[20px] phone:text-[18px]">Demo Book My Show</h1>
                    <div className="ps-[60px] mb-8">
                        <span><a href="https://github.com/SIDDARTH-P-P/Demo_book_my_show">
                            <img className="w-[30px] mt-5" src="./git.svg" alt="" /></a><img className="w-[40px] ms-2" src="./link.svg" alt="" /></span>
                    </div>
                </div>

                <div className="bor mb-5">
                    <div className="flex justify-center">
                        <img className="bor w-full aspect-video" src="./ecommers.jpg" alt="" />
                    </div>
                    <h1 className="flex justify-center mt-6 lg:text-[24px] md:text-[22px] sm:text-[20px] phone:text-[18px]">Ecommers</h1>
                    <div className="ps-[60px] mb-8">
                        <span><a href="https://github.com/SIDDARTH-P-P/Ecommerce-website"><img className="w-[30px] mt-5" src="./git.svg" alt="" /></a><img className="w-[40px] ms-2" src="./link.svg" alt="" /></span>
                    </div>
                </div>
            </div>
        </>
    );
}