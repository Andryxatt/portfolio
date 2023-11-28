import React from "react"
import NavLogo from "../components/navigation/NavLogo"
import NavLinks from "./navigation/NavLinks"
import ToggleMenuButton from "./navigation/ToogleMenuButton"
import LanguageSwitch from "./navigation/LanguageSwitch"
import LinkedinSvg from '../assets/Linkedin.svg'
import TelegramSvg from '../assets/Telegram.svg'
import GithubSvg from '../assets/Github.svg'
function Navigation() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false)

    return (
        <header>
            <ToggleMenuButton isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(!isMenuOpen)} />
            <NavLogo />
            <div id="menu-nav" className={`${isMenuOpen ? "" : "active-nav"} wrapper-nav`}>
                <NavLinks isMenuOpen={isMenuOpen} />
                <LanguageSwitch />
                <div className="social-mobile">
                    <img src={GithubSvg} alt="Github" className="cursor-pointer icon-hover" />
                    <img src={LinkedinSvg} alt="Linkedin" className="cursor-pointer icon-hover" />
                    <img src={TelegramSvg} alt="Telegram" className="cursor-pointer icon-hover" />
                </div>
            </div>

        </header>
    )
}
export default Navigation