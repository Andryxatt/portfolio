import './App.css'
import Banner from './components/Banner'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import TechSkills from './components/TechSkills'

function App() {
  return (
    <div className='bg-gradient'>
      <div className='p-2 noise mx-auto flex flex-col justify-center w-full max-w-[1440px] md:max-w-[1200px] sm:max-w-[768px] gap-4 sm:gap-2 md:gap-3 font-nunito text-white'>
        <Header />
        <Home />
        <Banner />
        <TechSkills />
        <Projects />
      </div>
      <div className='bg-[#1E1E20]'>
        <div className='p-5 mx-auto flex flex-col justify-center w-full max-w-[1440px] md:max-w-[1200px] sm:max-w-[768px] pt-10 sm:pt-6 md:pt-8 gap-4 sm:gap-2 md:gap-3 font-nunito text-white '>
          <ContactMe />
        </div>
      </div>
      <div className='p-5 mx-auto flex flex-col justify-center w-full max-w-[1440px] md:max-w-[1200px] sm:max-w-[768px] pt-10 sm:pt-6 md:pt-8 gap-4 sm:gap-2 md:gap-3 font-nunito text-white '>
        <Footer />
      </div>
    </div>
  )
}

export default App
