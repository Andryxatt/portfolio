import banner from '../assets/images/Banner.png'
import { IoIosArrowRoundUp } from "react-icons/io";
import { Link } from "react-scroll";
import { Element } from "react-scroll";

const Home = () => {
    return (
<Element name="home">
        <div className="flex sm:flex-row flex-col w-full h-auto sm:mt-16 mt-4 px-3">
            {/* Left Side (Text) */}
            <div className="w-full flex flex-col mb-4">
                <h1 className="md:text-[4rem] sm:text-[3rem] text-[2rem] leading-tight font-bold mb-4">Build Your Awesome Web App</h1>
                <p className="text-sm mb-6 leading-normal opacity-70">
                    Andrii Vlasiuk is a full-stack web developer.<br />
                    React + TypeScript + Vite + NestJS + TypeORM + Postgres. <br />
                    <Link to="" className='color-blue-500 text-primary hover:underline'>And more other technologies.</Link>
                </p>
                <Link to="projects" className={`text-center bg-primary hover:opacity-70 text-white py-2 px-4 max-w-[200px] rounded-md font-bold cursor-pointer`}>Projects <IoIosArrowRoundUp size={20} className='inline-block rotate-45' /></Link>
            </div>
            {/* Right Side (Images) */}
            <div className="">
                {/* Centered Banner Image */}
                <div className='banner relative flex items-center justify-center'>
                    <img className="rounded-3xl" src={banner} alt="Banner" />
                </div>
            </div>
        </div>
        </Element>   
    )
}

export default Home