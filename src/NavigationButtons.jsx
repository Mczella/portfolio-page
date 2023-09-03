import React, {useEffect, useState} from "react"
import {Stack} from "@chakra-ui/react";
import CircleFill from "./CircleFill";
import CircleStroke from "./CircleStroke";

const NavigationButtons = ({skills, experience, contact, header, scrollPosition, maxScroll, colorTheme, colorThemes}) => {
    console.log({scrollPosition})

    const handleClick = (arg) => {
        arg()
    }

    return (
        <Stack bottom="40px"
               right="40px"
               zIndex={3}
               position="fixed"
               align="center"
               width={'15px'}>
            {scrollPosition === 0 || scrollPosition < maxScroll ?
            <CircleFill colorThemes={colorThemes}
                        colorTheme={colorTheme}/>
                :
            <CircleStroke colorThemes={colorThemes}
                          colorTheme={colorTheme} handleClick={() => handleClick(header)}/>
            }
            {scrollPosition >= maxScroll && scrollPosition < 2*maxScroll?
                <CircleFill colorThemes={colorThemes}
                                       colorTheme={colorTheme}/>
                :
                <CircleStroke colorThemes={colorThemes}
                              colorTheme={colorTheme} handleClick={() => handleClick(experience)}/>
            }
            {scrollPosition >= 2*maxScroll &&  scrollPosition < 3*maxScroll?
                <CircleFill colorThemes={colorThemes}
                            colorTheme={colorTheme}/>
                :
                <CircleStroke colorThemes={colorThemes}
                              colorTheme={colorTheme} handleClick={() => handleClick(skills)}/>
            }
            {scrollPosition !== 0 && scrollPosition >= 3*maxScroll?
                <CircleFill colorThemes={colorThemes}
                            colorTheme={colorTheme}/>
                :
                <CircleStroke colorThemes={colorThemes}
                              colorTheme={colorTheme} handleClick={() => handleClick(contact)}/>
            }
        </Stack>

    )
}
export default NavigationButtons
