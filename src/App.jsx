import Layout from "./components/Layout"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import About from "./components/About"
import "./services/i18n";
import './index.css'
import './css/media.css'
const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-me" element={<About/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="projects" element={<Projects/>} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
