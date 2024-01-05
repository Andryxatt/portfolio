import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next";

const NavLinks = () => {
    const { t } = useTranslation();
    const links = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "Projects",
            path: "/projects"
        },
        {
            name: "About",
            path: "/about-me"
        },
        
        {
            name: "Contact",
            path: "/contact"
        }
    ]
    return (
        <ul>
            {links.map((link, index) => {
                return (
                    <li key={index}>
                        <NavLink  className={({ isActive }) => (isActive ? 'active' : '')}  to={link.path}>
                            <span className="anchor">#</span>
                            {t(link.name).toLowerCase()}
                        </NavLink>
                    </li>
                )
            })}
        </ul>
    )
}
export default NavLinks