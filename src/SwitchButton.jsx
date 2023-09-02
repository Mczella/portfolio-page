import {motion} from "framer-motion"
import React from "react"
import {background} from "@chakra-ui/react";

const SwitchButton = ({handleColorChange, colorThemes, colorTheme}) => {

    const pathVariants = {
        hidden: {
            rotate: 0,
        }, visible: {
            rotate: 360, transition: {
                duration: 2.5, ease: "easeInOut",
            }
        }
    }

    return (
        <motion.svg
            whileHover={{
                scale: 1.5,
                transition: {duration: 1},
            }}
            onClick={handleColorChange}
            initial="hidden"
            opacity={0.5}
            animate="visible"
            fill={colorThemes[colorTheme]?.colorScheme}
            viewBox="0 0 32 32"
            data-name="Layer 1" id="Layer_1"
            xmlns="http://www.w3.org/2000/svg">
            <motion.path
                stroke="white"
                strokeWidth="0.5"
                variants={pathVariants}
                className="cls-1"
                d="M17.83,26.85A11.11,11.11,0,0,1,16,27a10.88,10.88,0,0,1-7.53-3H10a1,1,0,0,0,0-2H6a1,1,0,0,0-1,1v4a1,1,0,0,0,2,0V25.36A12.91,12.91,0,0,0,16,29a13.06,13.06,0,0,0,2.17-.18,1,1,0,1,0-.34-2Z"/>
            <motion.path
                stroke="white"
                strokeWidth="0.5"
                variants={pathVariants}
                className="cls-1"
                d="M14.17,5.15A11.11,11.11,0,0,1,16,5a11,11,0,0,1,7.52,3H22a1,1,0,0,0,0,2h4a1,1,0,0,0,1-1V5a1,1,0,0,0-2,0V6.65A13,13,0,0,0,13.83,3.18a1,1,0,1,0,.34,2Z"/>
            <motion.path
                stroke="white"
                strokeWidth="0.5"
                variants={pathVariants}
                className="cls-1"
                d="M5.35,18.75A11,11,0,0,1,9,7.54V9a1,1,0,0,0,2,0V5a1,1,0,0,0-1-1H6A1,1,0,0,0,6,6H7.71A13,13,0,0,0,3,16a13.16,13.16,0,0,0,.41,3.25,1,1,0,0,0,1,.75l.25,0A1,1,0,0,0,5.35,18.75Z"/>
            <motion.path
                stroke="white"
                strokeWidth="0.5"
                variants={pathVariants}
                className="cls-1"
                d="M26,26H24.29A13,13,0,0,0,29,16a12.88,12.88,0,0,0-.42-3.28,1,1,0,1,0-1.93.5A11.27,11.27,0,0,1,27,16a11,11,0,0,1-4,8.46V23a1,1,0,0,0-2,0v4a1,1,0,0,0,1,1h4a1,1,0,0,0,0-2Z"/>
        </motion.svg>
    )
}
export default SwitchButton
