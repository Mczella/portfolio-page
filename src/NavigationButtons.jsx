import React, {useContext, useEffect, useState} from "react"
import {Stack} from "@chakra-ui/react";
import CircleFill from "./CircleFill";
import CircleStroke from "./CircleStroke";
import {ColorThemeContext} from "./ColorThemeContext";

const NavigationButtons = ({skills, experience, contact, header, scrollPosition, maxScroll}) => {
    console.log({scrollPosition})
    const { chosenColorScheme, chosenColor, chosenDarkColor, handleColorChange} = useContext(ColorThemeContext)


    const handleClick = (arg) => {
        arg()
    }

    return (
        <Stack bottom="40px"
               right="40px"
               zIndex={3}
               position="fixed"
               align="center"
               width={'18px'}>
            {scrollPosition === 0 || scrollPosition < maxScroll ?
            <CircleFill />
                :
            <CircleStroke handleClick={() => handleClick(header)}/>
            }
            {scrollPosition >= maxScroll && scrollPosition < 2*maxScroll?
                <CircleFill />
                :
                <CircleStroke handleClick={() => handleClick(experience)}/>
            }
            {scrollPosition >= 2*maxScroll &&  scrollPosition < 3*maxScroll?
                <CircleFill />
                :
                <CircleStroke handleClick={() => handleClick(skills)}/>
            }
            {scrollPosition !== 0 && scrollPosition >= 3*maxScroll?
                <CircleFill />
                :
                <CircleStroke handleClick={() => handleClick(contact)}/>
            }
        </Stack>

    )
}
export default NavigationButtons
