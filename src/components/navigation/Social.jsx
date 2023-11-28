import { FaTwitterSquare, FaLinkedin, FaTelegram } from "react-icons/fa"
const Social = () => {
    return (
        <div className="flex flex-row gap-2">
            <FaTwitterSquare className="cursor-pointer icon-hover" color="accent" size={'2rem'} />
            <FaLinkedin className="cursor-pointer icon-hover" color="accent" size={'2rem'} />
            <FaTelegram className="cursor-pointer icon-hover" color="accent" size={'2rem'} />
        </div>
    )
}
export default Social