import "./App.css";
import { Routes, Route } from "react-router-dom";

import Banner from "./components/Banner";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import TechSkills from "./components/TechSkills";
import Support from "./components/pages/Support";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Terms from "./components/pages/Terms";
import Background2 from "./components/Background2";

function App() {
  return (
    <div className="relative flex flex-col min-h-screen bg-gradient text-white font-nunito overflow-x-hidden">
      {/* 🔹 Фон */}
      <Background2 />

      {/* 🔹 Контент (має обмежену ширину) */}
      <div className="relative z-10 flex flex-col justify-center w-full max-w-[1440px] mx-auto px-6 sm:px-8 md:px-10 lg:px-16 flex-grow">
        <Header />

        <main className="flex-grow mt-4">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <Banner />
                  <TechSkills />
                  <Projects />
                </>
              }
            />
            <Route path="/support" element={<Support />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
          </Routes>
        </main>

    
      </div>
    <section className="bg-[#1E1E20] mt-12 mb-12 rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 sm:p-8 md:p-10 flex flex-col justify-center gap-6">
            <ContactMe />
          </div>
        </section>
      {/* 🔹 Футер (тепер на всю ширину!) */}
      <Footer />
    </div>
  );
}

export default App;
