import {motion} from "framer-motion"
import React from "react"

const CircleFill = ({colorThemes, colorTheme}) => {

    return (
        <motion.svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill={colorThemes[colorTheme]?.colorScheme}
            class="bi bi-triangle">
            <motion.circle stroke="white"
                           strokeWidth="0.8" cx="16" cy="16" r="16"/>
        </motion.svg>
    )
}
export default CircleFill
