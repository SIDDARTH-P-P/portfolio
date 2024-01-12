export default function Home(){
    return(
        <>
        <div className="grid grid-cols-2 gap-2">
            <div>
                <h1>hello</h1>
            </div>
            <div>
                <div className="rounded-full absolute w-[100px] h-[90px]  sm:w-[280px] sm:h-[300px] bg-yellow-400 mt-16"></div>
                <div className="rounded-full absolute w-[100px] h-[90px] sm:w-[280px] sm:h-[300px] bg-yellow-400  mt-16 md:ms-36"></div>
                <img className="hover:ms-28 duration-[2s] w-[50px]  sm:w-[250px]  mt-16  md:ms-36 absolute" src="./profile.png" alt="" />
            </div>
        </div>
        </>
    );
}


{/* <div className="w-[130px] h-[140px] bg-yellow-400 absolute mt-16 rounded-full"></div>
<div className="w-[130px] h-[140px] bg-yellow-400 absolute mt-16  ms-24  rounded-full"></div>
<img className="w-[110px]  mt-16  ms-16 absolute hover:ms-28 duration-[2s]" src="./profile.png" alt="" /> */}