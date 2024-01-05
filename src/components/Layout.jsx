import Navigation from './Navigation'
import { Outlet } from 'react-router-dom'
import LinkedinSvg from '../assets/Linkedin.svg'
import TelegramSvg from '../assets/Telegram.svg'
import GithubSvg from '../assets/Github.svg'
import Footer from './Footer'

const Layout = () => {
    return (
        <>
            <div className='wrapper-all'>
                <div className='social '>
                    <a href="https://github.com/Andryxatt" target="blank">
                        <img src={GithubSvg} alt="Github" className="cursor-pointer icon-hover" />
                    </a>
                    <a href='www.linkedin.com/in/andrii-vlasiuk-web-dev' target="blank">
                        <img src={LinkedinSvg} alt="Linkedin" className="cursor-pointer icon-hover" />
                    </a>
                    <a href='https://t.me/Andryxatt' target="blank">
                        <img src={TelegramSvg} alt="Telegram" className="cursor-pointer icon-hover" />
                    </a>
                </div>
                <Navigation />
                <Outlet />
            </div>
            <Footer />
        </>
    )
}

export default Layout