import {motion} from "framer-motion"
import React, {useContext} from "react"
import {ColorThemeContext} from "../contexts/ColorThemeContext";

const CircleFill = () => {
    const {chosenDarkColor} = useContext(ColorThemeContext)
    return (
        <motion.svg
            whileHover={{
                scale: 1.5,
                transition: {duration: 1},
            }}
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
