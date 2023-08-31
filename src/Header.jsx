import {
    Box,
    Flex,
    Spacer,
    Stack,
    Text,
    Image,
    Button,
    ButtonGroup,
    useBreakpointValue
} from "@chakra-ui/react"
import React, {useEffect, useRef, useState} from "react"
import {ReactSketchCanvas} from "react-sketch-canvas"
import Scroll from "./Scroll"
import Skills from "./Skills"
import {motion, useAnimate, useInView} from "framer-motion"
import Name from "./Name"
import Contact from "./Contact"
import useScroll from "./UseScroll";


const Header = () => {
    const sketchRef = useRef();
    const [isDrawing, setIsDrawing] = useState(false)
    const [isErasing, setIsErasing] = useState(false)
    const [boxHeight, setBoxHeight] = useState(0)
    const [prevScrollY, setPrevScrollY] = useState(0)
    const [scope, animate] = useAnimate()
    const [isMobile, setIsMobile] = useState(false)
    const [isHuge, setIsHuge] = useState(false)
    const [viewportHeight, setViewportHeight] = useState(null)
    const [skillsRef, scrollToComponent1] = useScroll()
    const [experienceRef, scrollToComponent2] = useScroll()
    const [contactRef, scrollToComponent3] = useScroll()
    const [topRef, scrollToComponent4] = useScroll()
    const { ref, inView } = useInView({
        triggerOnce: true, // Only trigger once when the element comes into view
    })

    useEffect(() => {
        setViewportHeight(visualViewport.height)
    }, [])

    visualViewport.onresize = () => {
        setViewportHeight(visualViewport.height)
    }

    console.log(viewportHeight)

    const handleScroll = () => {
        const maxScroll = window.innerHeight
        const scrollPosition = window.scrollY

        if (scrollPosition < maxScroll) {
            if (scrollPosition > prevScrollY) {
                setBoxHeight((scrollPosition / maxScroll) * 100 + "%")
            } else {
                setBoxHeight((scrollPosition / maxScroll) * 100 + "%")
            }
            setPrevScrollY(scrollPosition)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
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
        <Box flexDir={'column'}
             style={
                !isMobile && viewportHeight >= 665 ?
                    {scrollSnapType: 'y mandatory', overflowY: 'scroll'}
                    :
                    null
            }
             height={'100vh'}>
            <Flex flexDir="column" justify="center" alignItems="center" spacing="20" w="75%" m="auto">
                <motion.div initial={{ height: 0 }}
                            animate={{ height: inView ? '100vh' : 0 }}
                            transition={{ duration: 0.5 }}>
                <Box bg={"#ce016d"} w='10px' h={boxHeight} position="fixed" zIndex={-1}>
                </Box>
                </motion.div>
            </Flex>

            {isDrawing ? (
                <ButtonGroup
                    size={'xs'}
                    zIndex={2}
                    position="fixed"
                    variant='outline'
                    isAttached
                    textColor={'pink.400'}
                    bottom="20px"
                    right="20px"
                >
                <Button variant={isErasing ? 'solid' : 'outline'}
                        onClick={handleEraseClick}>
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
                    position="fixed"
                    zIndex={2}
                    onClick={handleDrawClick}
                    bottom="20px"
                    right="20px"
                >
                    Draw
                </Button>
            )}

            {viewportHeight >= 665?
                <ButtonGroup size={'xs'}
                             zIndex={2}
                             position="fixed"
                             variant='outline'
                             isAttached
                             textColor={'pink.400'}
                             bottom="40px"
                             right="10px">
                <Button onClick={scrollToComponent4}>
                    Top
                </Button>
                <Button onClick={scrollToComponent2}>
                    Experience
                </Button>
                <Button onClick={scrollToComponent1}>
                    Skills
                </Button>
                <Button onClick={scrollToComponent3}>
                    Contact
                </Button>
                </ButtonGroup>
            :
            null}

            <Flex bg={'#ce016d'}
                  direction={['column', 'column', 'column', 'row']}
                  justify={'space-between'}
                  h={'100vh'}
                  style={{scrollSnapAlign: 'start'}}
                  position={'relative'}
                  ref={topRef} >

                <Stack
                    width={'100%'}
                    height={'100%'}
                    position="absolute"
                    style={{zIndex: 1}}>
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
                    <Image zIndex={0}
                           objectFit='contain'
                           minW={'200px'}
                           height={'400px'}
                           maxH={isMobile? '50vh':null}
                           maxW={'80%'}
                           left={0}
                           src='me.png'
                           alt='Me'/>
                </Box>

                <Flex direction={'column'} alignItems="center" justifyContent="center">
                    <Box pr={['0', '50px','50px', '100px']}
                         pt={['20px', '50px', '50px', '100px']}
                         width={['80%', '80%', '80%', '800px']}>
                        <Name/>
                    </Box>
                    <Box w={['80%', '80%', '80%', '800px']}
                         pr={['10px', '50px', '50px', '100px']}
                         py={['20px', '30px', '30px', '50px']}>
                        <motion.div variants={about} initial="hidden" animate="visible">
                            <Text color="white" fontSize={['2xl', '3xl', '3xl', '5xl']} textAlign="left">
                                SOFTWARE DEVELOPER
                            </Text>
                        </motion.div>
                    </Box>
                </Flex>
            </Flex>
            <Scroll isMobile={isMobile} viewportHeight={viewportHeight} experienceRef={experienceRef} ref={ref}/>


            <Skills isMobile={isMobile} viewportHeight={viewportHeight} skillsRef={skillsRef}/>

            <Contact isMobile={isMobile} viewportHeight={viewportHeight} contactRef={contactRef}/>
        </Box>)
}

export default Header