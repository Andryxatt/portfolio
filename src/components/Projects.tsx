import web3Finance from '../assets/images/web3-finance.jpg'
import olympian from '../assets/images/olympian.jpg'
import exchange from '../assets/images/exchange.jpg'
import { Element } from "react-scroll";

const Projects = () => {
  return (
    <Element name="projects">
      <div className="mt-32 relative">
        <h2 className='text-4xl font-bold'>My Awesome Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
          <img className="w-full h-[240px] border-[16px] border-[#1E1E20] rounded-3xl" src={web3Finance} alt="" />
          <img className="w-full h-[240px] border-[16px] md:mt-20 border-[#1E1E20] rounded-3xl" src={olympian} alt="" />
          <img className="w-full h-[240px] border-[16px] md:mt-40 border-[#1E1E20] rounded-3xl" src={exchange} alt="" />
        </div>
      </div>
    </Element>
  )
}

export default Projects