import { FaTwitterSquare, FaLinkedin, FaTelegram } from "react-icons/fa"
const Social = () => {
    return (
        <div className="social-absolute">
            <a href="https://github.com/Andryxatt" target="blank">
                <FaTwitterSquare className="cursor-pointer icon-hover" color="accent" size={'2rem'} />
            </a>
            <a href="www.linkedin.com/in/andrii-vlasiuk-web-dev">
                <FaLinkedin className="cursor-pointer icon-hover" color="accent" size={'2rem'} />
            </a>
            <a>
                <FaTelegram className="cursor-pointer icon-hover" color="accent" size={'2rem'} />
            </a>
        </div>
    )
}
export default Social