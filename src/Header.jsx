import {Box, Button, ButtonGroup, Circle, Flex, Image, Stack, Text, useBreakpointValue} from "@chakra-ui/react"
import React, {useEffect, useRef, useState} from "react"
import {ReactSketchCanvas} from "react-sketch-canvas"
import Scroll from "./Scroll"
import Skills from "./Skills"
import {motion, useAnimate, useInView} from "framer-motion"
import Name from "./Name"
import Contact from "./Contact"
import useScroll from "./UseScroll";
import SwitchButton from "./SwitchButton";
import NavigationButtons from "./NavigationButtons";
import CircleGenerator from "./CircleGenerator";


const Header = () => {
    const sketchRef = useRef();
    const [isDrawing, setIsDrawing] = useState(false)
    const [isErasing, setIsErasing] = useState(false)
    const [boxHeight, setBoxHeight] = useState(0)
    const boxRef = useRef(null)
    const [prevScrollY, setPrevScrollY] = useState(0)
    const [scope, animate] = useAnimate()
    const [isMobile, setIsMobile] = useState(false)
    const [isHuge, setIsHuge] = useState(false)
    const [viewportHeight, setViewportHeight] = useState(null)
    const [viewportWidth, setViewportWidth] = useState(null)
    const [skillsRef, scrollToComponent1] = useScroll()
    const [experienceRef, scrollToComponent2] = useScroll()
    const [contactRef, scrollToComponent3] = useScroll()
    const [topRef, scrollToComponent4] = useScroll()
    const [colorTheme, setColorTheme] = useState('pink')
    const [maxScroll, setMaxScroll] = useState(0)
    const [scrollPosition, setScrollPosition] = useState(0)


    const getRandomColor = (colorThemes) => {
        const colors = Object.keys(colorThemes)
        const randomColor = colors[Math.floor(Math.random() * colors.length)]

        console.log(randomColor)
        return randomColor
    }

    const handleColorChange = () => {
        let randomColor
        do {
            randomColor = getRandomColor(colorThemes)
        } while (randomColor === colorTheme)
        setColorTheme(randomColor)
    }


    const colorThemes = {
        'red': {
            colorScheme: 'red',
            color: '#b90202',
            darkColor: '#850000'
        },
        'pink': {
            colorScheme: 'pink',
            color: '#ce016d',
            darkColor: '#810042'
        },
        'blue': {
            colorScheme: 'blue',
            color: '#0153ce',
            darkColor: '#003886'
        },
        'green': {
            colorScheme: 'green',
            color: '#159b00',
            darkColor: '#0e6701'
        },
        'purple': {
            colorScheme: 'purple',
            color: '#6701bb',
            darkColor: '#44007c'
        },
        'orange': {
            colorScheme: 'orange',
            color: '#ce6801',
            darkColor: '#8c4601'
        },
        'teal': {
            colorScheme: 'teal',
            color: '#01b69b',
            darkColor: '#017a6a'
        },
        'cyan': {
            colorScheme: 'cyan',
            color: '#01c7ce',
            darkColor: '#00787c'
        },
        'yellow': {
            colorScheme: 'yellow',
            color: '#dcb001',
            darkColor: '#b48f01'
        }
    }


    useEffect(() => {
        setViewportHeight(visualViewport.height)
        setViewportWidth(visualViewport.width)
    }, [])

    visualViewport.onresize = () => {
        setViewportHeight(visualViewport.height)
        setViewportWidth(visualViewport.width)
    }

    console.log(viewportHeight)



    const handleScroll = () => {
        const maxScroll = boxRef.current.clientHeight
        const scrollPosition = boxRef.current.scrollTop
        setMaxScroll(maxScroll)
        setScrollPosition(scrollPosition)

        console.log({maxScroll})
        console.log({scrollPosition})

        if (scrollPosition < maxScroll) {
            if (scrollPosition > prevScrollY) {
                isMobile?
                    setBoxHeight((scrollPosition / maxScroll) * 100 + "%")
                        :
                    setBoxHeight((scrollPosition / maxScroll) * 200 + "%")
            } else {
                isMobile?
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

    console.log(isDrawing)

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

    const deviceSize = useBreakpointValue({
        base: 'smallest',
        sm: 'small',
        md: 'medium',
        lg: "large",
        xl: 'extra large',
        '2xl': 'huge'
    })

    useEffect(() => {
        setIsMobile(
            deviceSize === "medium" ||
            deviceSize === "smallest" ||
            deviceSize === "small"
        )
        setIsHuge(deviceSize === "huge")
    }, [deviceSize])

    console.log({isMobile})
    console.log({isHuge})


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
                <Box bg={colorThemes[colorTheme]?.color} w='10px' h={boxHeight} position="fixed" zIndex={-1}>
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
                        colorThemes={colorThemes}
                        colorTheme={colorTheme}
                    />
                :
                null}
            <Box
                zIndex={3}
                position="absolute"
                width={'40px'}
                top="40px"
                right="40px">
                <SwitchButton handleColorChange={handleColorChange} colorThemes={colorThemes} colorTheme={colorTheme}/>
            </Box>

            <Flex bg={colorThemes[colorTheme]?.color}
                  direction={['column', 'column', 'column', 'row', 'row']}
                  justify={'space-between'}
                  h={'100vh'}
                  style={{scrollSnapAlign: 'start'}}
                  position={'relative'}
                  ref={topRef}>

            <Box position={'absolute'} height={isMobile? '100dvh' : null} width={isMobile? '100%' : '100%'} zIndex={0}>
            <CircleGenerator isMobile={isMobile} colorTheme={colorTheme} viewportWidth={viewportWidth} viewportHeight={viewportHeight}/>
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
                            colorScheme={colorThemes[colorTheme]?.color}
                            color={'white'}
                            left="40px"
                        >
                            <Button variant={isErasing ? 'solid' : 'outline'}
                                    onClick={handleEraseClick}
                                    colorScheme={isErasing ? null : colorThemes[colorTheme]?.color}>
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
                            _hover={{color: colorThemes[colorTheme]?.color, background: 'white'}}
                            position="relative"
                            zIndex={3}
                            variant={'outline'}
                            color={'white'}
                            colorScheme={colorThemes[colorTheme]?.colorScheme}
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

            <Scroll isMobile={isMobile} viewportHeight={viewportHeight} experienceRef={experienceRef} newColor={colorThemes[colorTheme]?.color} colorScheme={colorThemes[colorTheme]?.colorScheme}/>


            <Skills isMobile={isMobile} viewportHeight={viewportHeight} skillsRef={skillsRef}
                    newColor={colorThemes[colorTheme]?.color} colorTheme={colorTheme}/>

            <Contact isMobile={isMobile} viewportHeight={viewportHeight} contactRef={contactRef}
                     newColor={colorThemes[colorTheme]?.color} colorScheme={colorThemes[colorTheme]?.colorScheme} darkColor={colorThemes[colorTheme]?.darkColor}/>
        </Box>)
}

export default Header