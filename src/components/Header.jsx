import {Box, Button, ButtonGroup, Flex, Image, Stack, Text} from "@chakra-ui/react"
import React, {useContext, useEffect, useRef, useState} from "react"
import {ReactSketchCanvas} from "react-sketch-canvas"
import Experience from "./Experience"
import Skills from "./Skills"
import {motion} from "framer-motion"
import Name from "./Name"
import Contact from "./Contact"
import useScroll from "../hooks/UseScroll"
import SwitchButton from "./SwitchButton"
import NavigationButtons from "./NavigationButtons"
import CircleGenerator from "./CircleGenerator"
import {ViewportContext} from "../contexts/ViewportContext"
import {ColorThemeContext} from "../contexts/ColorThemeContext";


const Header = () => {
    const sketchRef = useRef();
    const [isDrawing, setIsDrawing] = useState(false)
    const [isErasing, setIsErasing] = useState(false)
    const [boxHeight, setBoxHeight] = useState(0)
    const boxRef = useRef(null)
    const [prevScrollY, setPrevScrollY] = useState(0)
    const [skillsRef, scrollToComponent1] = useScroll()
    const [experienceRef, scrollToComponent2] = useScroll()
    const [contactRef, scrollToComponent3] = useScroll()
    const [topRef, scrollToComponent4] = useScroll()
    const [maxScroll, setMaxScroll] = useState(0)
    const [scrollPosition, setScrollPosition] = useState(0)
    const {viewportHeight, isMobile, isHuge} = useContext(ViewportContext)
    const {chosenColorScheme, chosenColor} = useContext(ColorThemeContext)

    const handleScroll = () => {
        const maxScroll = boxRef.current.clientHeight
        const scrollPosition = boxRef.current.scrollTop
        setMaxScroll(maxScroll)
        setScrollPosition(scrollPosition)

        console.log({maxScroll})
        console.log({scrollPosition})

        if (scrollPosition < maxScroll) {
            if (scrollPosition > prevScrollY) {
                isMobile ?
                    setBoxHeight((scrollPosition / maxScroll) * 100 + "%")
                    :
                    setBoxHeight((scrollPosition / maxScroll) * 200 + "%")
            } else {
                isMobile ?
                    setBoxHeight((scrollPosition / maxScroll) * 100 + "%")
                    :
                    setBoxHeight((scrollPosition / maxScroll) * 200 + "%")
            }
            setPrevScrollY(scrollPosition)
        }
    }

    useEffect(() => {
        const boxRef = document.getElementById("scroll-box")

        if (boxRef) {
            boxRef.addEventListener("scroll", handleScroll)
        }

        return () => {
            if (boxRef) {
                boxRef.removeEventListener("scroll", handleScroll)
            }
        }
    }, [])


    const handleDrawClick = () => {
        setIsDrawing(true)
    }

    const handleEraseClick = () => {
        !isErasing ? setIsErasing(true) : setIsErasing(false)
    }

    const handleClearClick = () => {
        try {
            sketchRef.current.clearCanvas()
        } catch (error) {
            console.log("No drawing to clear.")
        }
    };

    const handleUndoClick = () => {
        try {
            sketchRef.current.undo()
        } catch (error) {
            console.log("No drawing to undo.")
        }
    };

    const handleRedoClick = () => {
        try {
            sketchRef.current.redo()
        } catch (error) {
            console.log("No drawing to redo.")
        }
    };

    useEffect(() => {
        try {
            isErasing ? sketchRef.current.eraseMode(true) : sketchRef.current.eraseMode(false)
        } catch (error) {
            console.log(error)
        }
    }, [isErasing])

    const about = {
        hidden: {
            opacity: 0,
            y: 300
        }, visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                bounce: 0.4, duration: 1.5, ease: "easeInOut", delay: 2.5
            }
        }
    }

    return (
        <Box ref={boxRef}
             id="scroll-box"
             flexDir={'column'}
             style={
                 !isMobile && viewportHeight >= 665 ?
                     {scrollSnapType: 'y mandatory', overflowY: 'scroll'}
                     :
                     null
             }
             height={'100vh'}>
            <Flex flexDir="column" justify="center" alignItems="center" spacing="20" w="75%" m="auto">
                <Box bg={chosenColor} w='10px' h={boxHeight} position="fixed" zIndex={-1}>
                </Box>
            </Flex>

            {!isMobile && viewportHeight >= 665 ?
                <NavigationButtons
                    skills={scrollToComponent1}
                    experience={scrollToComponent2}
                    contact={scrollToComponent3}
                    header={scrollToComponent4}
                    maxScroll={maxScroll}
                    scrollPosition={scrollPosition}
                />
                :
                null}
            <Box
                zIndex={3}
                position="absolute"
                width={'40px'}
                top="40px"
                right="40px"
                as={motion.div}
                whileTap={{
                    rotate: 540,
                    transition: {duration: 0.2}
                }}>
                <SwitchButton/>
            </Box>

            <Flex bg={chosenColor}
                  direction={['column', 'column', 'column', 'row', 'row']}
                  justify={'space-between'}
                  h={'100vh'}
                  style={{scrollSnapAlign: 'start'}}
                  position={'relative'}
                  ref={topRef}>

                <Box position={'absolute'} height={isMobile ? '100dvh' : null} width={isMobile ? '100%' : '100%'}
                     zIndex={0}>
                    <CircleGenerator isMobile={isMobile}/>
                </Box>
                <Stack
                    width={'100%'}
                    height={'100%'}
                    position="absolute"
                    style={{zIndex: 2}}>
                    {isDrawing ? (
                            <ReactSketchCanvas
                                style={{border: 'none'}}
                                ref={sketchRef}
                                strokeColor={isDrawing ? 'black' : null}
                                strokeWidth={isDrawing ? '4' : null}
                                eraserWidth={20}
                                canvasColor={'rgba(255,255,255,0)'}
                            />)
                        :
                        null
                    }
                </Stack>

                <Box py={['10px', '25px', '50px']} pr={['10px', '25px', '50px']}>
                    <Box zIndex={1}>
                        <Image position={'relative'}
                               objectFit='contain'
                               minW={'200px'}
                               height={'400px'}
                               maxH={isMobile ? '50vh' : null}
                               maxW={'80%'}
                               left={0}
                               src='me.png'
                               alt='Me'/>
                    </Box>
                    {isDrawing ? (
                        <ButtonGroup
                            size={'xs'}
                            zIndex={3}
                            position="relative"
                            variant='outline'
                            isAttached
                            colorScheme={'white'}
                            color={'white'}
                            left="40px"
                        >
                            <Button variant={isErasing ? 'solid' : 'outline'}
                                    onClick={handleEraseClick}
                                    colorScheme={isErasing ? null : chosenColor}>
                                Erase
                            </Button>
                            <Button onClick={handleClearClick}>
                                Clear
                            </Button>
                            <Button onClick={handleUndoClick}>
                                Undo
                            </Button>
                            <Button onClick={handleRedoClick}>
                                Redo
                            </Button>
                            <Button onClick={() => setIsDrawing(false)}>
                                X
                            </Button>
                        </ButtonGroup>) : (
                        <Button
                            size={'xs'}
                            _hover={{color: chosenColor, background: 'white'}}
                            position="relative"
                            zIndex={3}
                            variant={'outline'}
                            color={'white'}
                            colorScheme={chosenColorScheme}
                            onClick={handleDrawClick}
                            left={['20px', '40px']}
                        >
                            Draw
                        </Button>
                    )}
                </Box>

                <Flex direction={'column'} alignItems="left" justifyContent="center">
                    <Box px={['50px', '50px', '50px', '100px', '100px']}
                         pt={['20px', '10px', '10px', '100px']}
                         width={['90%', '80%', '500px', '100%', '800px']}>
                        <Name/>
                    </Box>
                    <Box w={['80%', '80%', '500px', '100%', '800px']}
                         px={['50px', '50px', '50px', '100px', '100px']}
                         py={['20px', '10px', '10px', '50px']}>
                        <motion.div variants={about} initial="hidden" animate="visible">
                            <Text color="white" fontSize={['2xl', '3xl', '3xl', '4xl', '5xl']} textAlign="left">
                                SOFTWARE DEVELOPER
                            </Text>
                        </motion.div>
                    </Box>
                </Flex>
            </Flex>

            <Experience isMobile={isMobile} experienceRef={experienceRef}/>


            <Skills isMobile={isMobile} skillsRef={skillsRef}/>

            <Contact isMobile={isMobile} contactRef={contactRef}/>
        </Box>)
}

export default Header