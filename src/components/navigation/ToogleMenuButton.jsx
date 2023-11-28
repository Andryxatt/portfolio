const ToggleMenuButton = ({ onClick, isMenuOpen }) => {

    return (
        <button onClick={() => onClick()} type="button" className="toogle-nav-button" aria-controls="menu-nav" aria-expanded="false">
            <svg fill="#fff" className="hamburger" viewBox="0 0 36 36" width="36">
                <rect className={`${isMenuOpen ? "activesvg": ""} topsvg line`} height="6" width="36" y="5" x="0"></rect>
                <rect className={`${isMenuOpen ? "activesvg": ""} middlesvg line`} height="6" width="36" y="25" x="10"></rect>
            </svg>
            {/* <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg> */}
        </button>
    )
}
export default ToggleMenuButton;