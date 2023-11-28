

import { DarkModeSwitch } from "react-toggle-dark-mode"
import useDarkSide from '../../hooks/UseDarkSide'
import { useState } from "react"

import Social from "./Social"
const ToolBar = () => {
    const [colorTheme, setTheme] = useDarkSide();
    const [darkSide, setDarkSide] = useState(
        colorTheme === "light" ? true : false
    );
    const [isHovered, setIsHovered] = useState(false);
    const toggleDarkMode = (checked) => {
        setTheme(colorTheme);
        setDarkSide(checked);
    };
    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };
   
    return (
        <div className="toolbar-wrapper">
            <DarkModeSwitch
                checked={darkSide}
                onChange={toggleDarkMode}
                size={25}
                moonColor={isHovered ? '#05386B' : '#8EE4AF'}
                sunColor={isHovered ? '#8EE4AF' : '#05386B'}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            />
            <Social />
        </div>
    )
}
export default ToolBar;