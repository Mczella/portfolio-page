import {motion} from "framer-motion"
import React, {useContext} from "react"
import {ColorThemeContext} from "./ColorThemeContext";

const CircleFill = () => {
    const { chosenColorScheme, chosenColor, chosenDarkColor, handleColorChange} = useContext(ColorThemeContext)
    return (
        <motion.svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill={chosenDarkColor}
            class="bi bi-triangle">
            <motion.circle stroke="white"
                           strokeWidth="0.8" cx="16" cy="16" r="16"/>
        </motion.svg>
    )
}
export default CircleFill
