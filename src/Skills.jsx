import React, {useState, useEffect} from "react"
import {
    Box,
    Flex, Heading,
    SimpleGrid,
} from "@chakra-ui/react"

import {
    Chakra,
    CssColor,
    CssWhite,
    FireBaseColor,
    FireBaseWhite,
    GitHub,
    HtmlColor,
    HtmlWhite, JsColor, JsWhite, PythonColor, PythonWhite,
    ReactLogo
} from "./Logos"
import {useHover} from "./useHover"
import CircleGenerator from "./CircleGenerator";


const Skills = ({isMobile, viewportHeight, skillsRef, newColor, colorTheme}) => {
    const cssHover = useHover()
    const firebaseHover = useHover()
    const htmlHover = useHover()
    const pythonHover = useHover()
    const jsHover = useHover()

    return (
        <Flex ref={skillsRef} position={'relative'} bg={newColor} flexDir={'column'} style={!isMobile && viewportHeight>=665?{ scrollSnapAlign: 'start', height: '100vh'}: null}>
            <Box position={'absolute'} height={'100%'} width={'100%'} zIndex={0}>
                <CircleGenerator isMobile={isMobile} colorTheme={colorTheme}/>
            </Box>
            <Flex maxW="75%" py={'30px'} m={'auto'} mt={'50px'}>
            <Heading  size="xl" color={'white'}>
                Skills
            </Heading>
            </Flex>
            <SimpleGrid maxW="75%" py={'30px'} m={'auto'} minChildWidth='100px' spacing='40px'>
                <Box zIndex={2}
                     onMouseEnter={pythonHover.handleMouseEnter}
                     onMouseLeave={pythonHover.handleMouseLeave}>
                    {pythonHover.isHovered ? <PythonColor/> : <PythonWhite/>}
                </Box>

                <Box zIndex={2}
                     onMouseEnter={jsHover.handleMouseEnter}
                     onMouseLeave={jsHover.handleMouseLeave}>
                    {jsHover.isHovered ? <JsColor/> : <JsWhite/>}
                </Box>
                <Box zIndex={2}
                     onMouseEnter={htmlHover.handleMouseEnter}
                     onMouseLeave={htmlHover.handleMouseLeave}>
                    {htmlHover.isHovered ? <HtmlColor/> : <HtmlWhite/>}
                </Box>
                <Box zIndex={2}
                     onMouseEnter={cssHover.handleMouseEnter}
                     onMouseLeave={cssHover.handleMouseLeave}>
                    {cssHover.isHovered ? <CssColor/> : <CssWhite/>}
                </Box>
                <ReactLogo/>
                <Chakra/>
                <Box zIndex={2}
                     onMouseEnter={firebaseHover.handleMouseEnter}
                     onMouseLeave={firebaseHover.handleMouseLeave}>
                    {firebaseHover.isHovered ? <FireBaseColor/> : <FireBaseWhite/>}
                </Box>
                <GitHub/>
            </SimpleGrid>
        </Flex>
    )
}

export default Skills
