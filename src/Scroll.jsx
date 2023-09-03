import React, {useState, useEffect, useRef, useContext} from "react"
import {
    Box,
    Flex,
    Text,
    Heading,
    Link,
    Grid,
    GridItem,
    useBreakpointValue,
    Circle,
    Badge,
} from "@chakra-ui/react"
import {inView, motion, useInView} from "framer-motion";
import {ViewportContext} from "./ViewportContext";
import {ColorThemeContext} from "./ColorThemeContext";

const Scroll = ({experienceRef}) => {
    const columnLayout = useBreakpointValue({base: "1fr", lg: "repeat(7, 1fr)"})
    const {viewportHeight, viewportWidth, isMobile, isHuge} = useContext(ViewportContext)
    const { chosenColorScheme, chosenColor, chosenDarkColor, handleColorChange} = useContext(ColorThemeContext)



    const gridItem = {
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
        <><Flex ref={experienceRef} position={'relative'} style={!isMobile && viewportHeight>=665?{ scrollSnapAlign: 'start', height: '100vh'}: null} flexDir="column" justify="center" alignItems="center" spacing="20" w="75%" m="auto" py={'30px'} pt={isMobile? 0 : '30px'} zIndex={1}>
                <Grid position={'relative'} templateColumns={columnLayout} templateRows='repeat(5, 1fr)' gap={2}>
                    <GridItem
                        colSpan={isMobile ? 1 : 3}
                        style={{minWidth: '200px'}}>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={5} display="flex" justifyContent="center" alignItems='flex-end'>
                        <Circle
                            mt={'20px'}
                            mx={'20px'}
                            bg={chosenColor}
                            size={'150px'}
                            color={'white'}
                        >
                            <Text fontSize={'40px'}>
                                2022
                            </Text>
                        </Circle>
                    </GridItem>
                    <GridItem
                              colSpan={isMobile ? 1 : 3}
                              style={{minWidth: '200px'}}>
                    </GridItem>
                    <GridItem as={motion.div} initial="hidden" animate="visible"
                              variants={gridItem}
                              colSpan={isMobile ? 1 : 3}
                              rowSpan={4}
                              style={{minWidth: '200px'}}>
                        <Box  textAlign={isMobile ? "justify" : "right"}>
                            <Heading mt={isMobile? '20px' : 0} py={'10px'} bg="white" size={'md'}>Pyladies Python Course - Flappy Bird</Heading>
                            <Text bg="white">A Python adaptation of Flappy Bird written as a means to practice and apply the skills
                                I acquired through the Pyladies course.</Text>

                            <Badge position={'relative'} zIndex={2} colorScheme={chosenColorScheme} px={2} rounded={'full'}>
                                <Link href={'https://github.com/Mczella/FlappyBird'} color={chosenColor} isExternal>
                                    Check out the code here
                                </Link>
                            </Badge>
                        </Box>
                    </GridItem>
                    <GridItem
                              colSpan={isMobile ? 1 : 3}
                              rowSpan={4}
                              style={{minWidth: '200px'}}>
                        <Box textAlign={isMobile ? "justify" : "left"}>
                            <Heading py={'10px'} textAlign={'left'} bg="white" size={'md'}>Rohlik.cz Shopping Automation Project</Heading>
                            <Text bg="white">A Python project aimed at managing groceries and automating shopping.</Text>

                            <Badge position={'relative'} zIndex={2} colorScheme={chosenColorScheme} px={2} rounded={'full'}>
                                <Link href={'https://github.com/Mczella/Rohlik.cz-automation'} color={chosenColor} isExternal>
                                    Check out the code here
                                </Link>
                            </Badge>
                        </Box>
                    </GridItem>
                </Grid>

                <Grid mt={'40px'} position={'relative'} templateColumns={columnLayout}
                      templateRows={isMobile ? 'repeat(5, 1fr)' : 'repeat(7, 1fr)'} gap={2}>
                    <GridItem
                        colSpan={isMobile ? 1 : 3}
                        style={{minWidth: '200px'}}>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={5} display="flex" justifyContent="center" alignItems='flex-end'>
                        <Circle
                            m={'20px'}
                            bg={chosenColor}
                            size={'150px'}
                            color={'white'}
                        >
                            <Text fontSize={'40px'}>
                                2023
                            </Text>
                        </Circle>
                    </GridItem>
                    <GridItem
                              colSpan={isMobile ? 1 : 3}
                              style={{minWidth: '200px'}}>
                    </GridItem>
                    <GridItem
                              colSpan={isMobile ? 1 : 3}
                              rowSpan={3}
                              style={{minWidth: '200px'}}>
                        <Box textAlign={isMobile ? "justify" : "right"}>
                            <Heading py={'10px'} textAlign={isMobile? 'left' : 'right'} bg="white" size={'md'}>ReactGirls Academy - Bomberman</Heading>
                            <Text bg="white">A JavaScript project featuring a fully functional classic game developed during my
                                time at the ReactGirls Academy and continued afterwards. Check out the code on my GitHub page.</Text>
                        <Badge position={'relative'} zIndex={2} colorScheme={chosenColorScheme} px={2} rounded={'full'}>
                            <Link href={'https://javascript-bomberman.netlify.app/'} color={chosenColor} isExternal>
                                Play here
                            </Link>
                        </Badge>
                        </Box>
                    </GridItem>
                    <GridItem
                              colSpan={isMobile ? 1 : 3}
                              rowSpan={3}
                              style={{minWidth: '200px'}}>
                        <Box textAlign={isMobile ? "justify" : "left"}>
                            <Heading py={'10px'} bg="white" size={'md'}>Wishlist React App Project</Heading>
                            <Text bg="white">Wishlist is a React project built with Firebase and Chakra UI, designed to
                                simplify
                                the process of creating gift registries. It provides users with the ability to
                                create,
                                manage, and reserve gifts, as well as manage user accounts.</Text>

                            <Badge position={'relative'} zIndex={2} colorScheme={chosenColorScheme} px={2} rounded={'full'}>
                                <Link href={'https://github.com/Mczella/Wishlist'} color={chosenColor} isExternal>
                                    Check out the code here
                                </Link>
                            </Badge>
                        </Box>
                    </GridItem>
                    <GridItem
                              colSpan={isMobile ? 1 : 3}
                              rowSpan={3}
                              style={{minWidth: '200px'}}>
                        <Box textAlign={isMobile ? "justify" : "right"}>
                            <Heading py={'10px'} textAlign={isMobile ? "left" : "right"} bg="white" size={'md'}>Google Cybersecurity Professional Certificate</Heading>
                            <Text bg="white">Python | Linux | SQL | Security Information and Event Management (SIEM) tools. In progress, to be finished by December.</Text>
                        </Box>
                    </GridItem>
                    <GridItem
                              colSpan={isMobile ? 1 : 3}
                              rowSpan={3}
                              style={{minWidth: '200px'}}>
                        <Box textAlign={isMobile ? "justify" : "left"}>
                            <Heading py={'10px'} bg="white" size={'md'}>Pyladies Data Course</Heading>
                            <Text bg="white">Data Science | Jupyter notebook | Pandas | Machine learning. Starting in September.</Text>
                        </Box>
                    </GridItem>
                </Grid>
            </Flex>
        </>
    )
}

export default Scroll

