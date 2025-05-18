import './App.css';
import { Routes, Route } from 'react-router-dom';

import Banner from './components/Banner';
import ContactMe from './components/ContactMe';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import TechSkills from './components/TechSkills';

import Support from './components/pages/Support';
import PrivacyPolicy from './components/pages/PrivacyPolicy';
import Terms from './components/pages/Terms';

function App() {
  return (
      <div className='flex flex-col min-h-screen bg-gradient'>
        <div className='noise mx-auto flex flex-col justify-center w-full max-w-[1440px] md:max-w-[1200px] sm:max-w-[768px] font-nunito text-white'>
          <Header />
        </div>

        {/* Main content */}
        <main className='flex-grow'>
          <Routes>
            <Route
              path="/"
              element={
                <div className='noise mx-auto flex flex-col justify-center w-full max-w-[1440px] md:max-w-[1200px] sm:max-w-[768px] font-nunito text-white'>
                  <Home />
                  <Banner />
                  <TechSkills />
                  <Projects />
                </div>
              }
            />
            <Route path="/support" element={<Support />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
          </Routes>
        </main>

        {/* Contact Section */}
        <div className='bg-[#1E1E20] mb-24'>
          <div className='p-5 mx-auto flex flex-col justify-center w-full max-w-[1440px] md:max-w-[1200px] sm:max-w-[768px] pt-10 sm:pt-6 md:pt-8 gap-4 sm:gap-2 md:gap-3 font-nunito text-white '>
            <ContactMe />
          </div>
        </div>
          <Footer />
      </div>
  );
}

export default App;
