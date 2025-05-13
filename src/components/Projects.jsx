import web3Finance from '../assets/images/web3-finance.jpg'
import olympian from '../assets/images/olympian.jpg'
import exchange from '../assets/images/exchange.jpg'
import { Element } from "react-scroll";

const Projects = () => {
  return (
    <Element name="projects">
      <div className="mt-10 mb-10 px-3 relative">
        <h2 className='text-4xl font-bold text-center mb-20'>My Awesome Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {[web3Finance, olympian, exchange].map((img, index) => (
            <div key={index} className="group w-full h-[240px] rounded-lg shadow-md relative">
              <img
                src={img}
                alt={`project ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </Element>
  )
}

export default Projects
