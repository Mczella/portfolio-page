import {motion} from "framer-motion";
import React, {useContext} from "react";
import {ColorThemeContext} from "./ColorThemeContext";

const CircleStroke = ({handleClick}) => {
    const { chosenColorScheme, chosenColor, chosenDarkColor, handleColorChange} = useContext(ColorThemeContext)

    return (
        <motion.svg onClick={handleClick}
                    fill={chosenDarkColor} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <motion.path stroke="white"
                         strokeWidth="0.8" d="M16,32A16,16,0,1,0,0,16,16,16,0,0,0,16,32ZM16,2A14,14,0,1,1,2,16,14,14,0,0,1,16,2Z"/>
        </motion.svg>
)
}

export default CircleStroke