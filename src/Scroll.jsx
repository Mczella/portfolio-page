import React, {useState, useEffect, useRef} from "react"
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

const Scroll = ({isMobile, viewportHeight, experienceRef, newColor, colorScheme}) => {
    const columnLayout = useBreakpointValue({base: "1fr", lg: "repeat(7, 1fr)"})
    const ref = useRef(null)
    const isInView = useInView(ref)


    return (
        <><Flex ref={experienceRef} position={'relative'} style={!isMobile && viewportHeight>=665?{ scrollSnapAlign: 'start', height: '100vh'}: null} flexDir="column" justify="center" alignItems="center" spacing="20" w="75%" m="auto" py={'30px'} zIndex={1}>
                <Grid position={'relative'} templateColumns={columnLayout} templateRows='repeat(5, 1fr)' gap={2}>
                    <GridItem bg="white"
                              colSpan={isMobile ? 1 : 3}
                              style={{minWidth: '200px'}}
                              display="flex"
                              justifyContent="center"
                              alignItems="center">
                        <Box flex="1" textAlign={isMobile ? "center" : "right"}>
                            <Heading size={'md'}>Pyladies Python Course</Heading>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={5} display="flex" justifyContent="center" alignItems="center">
                        <Circle
                            m={'20px'}
                            bg={newColor}
                            size={'150px'}
                            color={'white'}
                        >
                            <Text fontSize={'40px'}>
                                2022
                            </Text>
                        </Circle>
                    </GridItem>
                    <GridItem bg="white"
                              colSpan={isMobile ? 1 : 3}
                              style={{minWidth: '200px'}}>
                    </GridItem>
                    <GridItem bg="white"
                              colSpan={isMobile ? 1 : 3}
                              rowSpan={4}
                              style={{minWidth: '200px'}}>
                        <Box textAlign={isMobile ? "justify" : "right"}>
                            <Heading size={'sm'}>Flappy Bird</Heading>
                            <Text>A Python adaptation of Flappy Bird written as a means to practice and apply the skills
                                I acquired through the Pyladies course.</Text>

                            <Badge position={'relative'} zIndex={2} colorScheme={colorScheme} px={2} rounded={'full'}>
                                <Link href={'https://github.com/Mczella/FlappyBird'} color={newColor} isExternal>
                                    Check out the code here
                                </Link>
                            </Badge>
                        </Box>
                    </GridItem>
                    <GridItem bg="white"
                              colSpan={isMobile ? 1 : 3}
                              rowSpan={4}
                              style={{minWidth: '200px'}}>
                        <Box textAlign={isMobile ? "justify" : "left"}>
                            <Heading size={'sm'}>Rohlik.cz Shopping Automation</Heading>
                            <Text>A Python project aimed at managing groceries and automating shopping.</Text>

                            <Badge position={'relative'} zIndex={2} colorScheme={colorScheme} px={2} rounded={'full'}>
                                <Link href={'https://github.com/Mczella/FlappyBird'} color={newColor} isExternal>
                                    Check out the code here
                                </Link>
                            </Badge>
                        </Box>
                    </GridItem>
                </Grid>

                <Grid mt={'40px'} position={'relative'} templateColumns={columnLayout}
                      templateRows={isMobile ? 'repeat(5, 1fr)' : 'repeat(7, 1fr)'} gap={2}>
                    <GridItem bg="white"
                              colSpan={isMobile ? 1 : 3}
                              style={{minWidth: '200px'}}
                              display="flex"
                              justifyContent="center"
                              alignItems="center">
                        <Box flex="1" textAlign={isMobile ? "center" : "right"}>
                            <Heading size={'md'}>ReactGirls Academy</Heading>
                        </Box>
                    </GridItem>
                    <GridItem colSpan={1} rowSpan={5} display="flex" justifyContent="center" alignItems='flex-end'>
                        <Circle
                            m={'20px'}
                            bg={newColor}
                            size={'150px'}
                            color={'white'}
                        >
                            <Text fontSize={'40px'}>
                                2023
                            </Text>
                        </Circle>
                    </GridItem>
                    <GridItem bg="white"
                              colSpan={isMobile ? 1 : 3}
                              style={{minWidth: '200px'}}>
                    </GridItem>
                    <GridItem bg="white"
                              colSpan={isMobile ? 1 : 3}
                              rowSpan={3}
                              style={{minWidth: '200px'}}>
                        <Box textAlign={isMobile ? "justify" : "right"}>
                            <Heading size={'sm'}>Bomberman</Heading>
                            <Text>A JavaScript project featuring a fully functional classic game developed during my
                                time at the ReactGirls Academy and continued afterwards.</Text>
                        <Badge position={'relative'} zIndex={2} colorScheme={colorScheme} px={2} rounded={'full'}>
                            <Link href={'https://github.com/Mczella/FlappyBird'} color={newColor} isExternal>
                                Check out the code here
                            </Link>
                        </Badge>
                        </Box>
                    </GridItem>
                    <GridItem bg="white"
                              colSpan={isMobile ? 1 : 3}
                              rowSpan={3}
                              style={{minWidth: '200px'}}>
                        <Box textAlign={isMobile ? "justify" : "left"}>
                            <Heading size={'sm'}>Google Cybersecurity Professional Certificate</Heading>
                            <Text>In progress, to be finished by December.</Text>
                        </Box>
                    </GridItem>
                    <GridItem bg="white"
                              colSpan={isMobile ? 1 : 3}
                              rowSpan={3}
                              style={{minWidth: '200px'}}>
                        <Box textAlign={isMobile ? "justify" : "right"}>
                            <Heading size={'sm'}>Wishlist React App</Heading>
                            <Text>Wishlist is a React project built with Firebase and Chakra UI, designed to
                                simplify
                                the process of creating gift registries. It provides users with the ability to
                                create,
                                manage, and reserve gifts, as well as manage user accounts.</Text>

                            <Badge position={'relative'} zIndex={2} colorScheme={colorScheme} px={2} rounded={'full'}>
                                <Link href={'https://github.com/Mczella/FlappyBird'} color={newColor} isExternal>
                                    Check out the code here
                                </Link>
                            </Badge>
                        </Box>
                    </GridItem>
                    <GridItem bg="white"
                              colSpan={isMobile ? 1 : 3}
                              rowSpan={3}
                              style={{minWidth: '200px'}}>
                        <Box textAlign={isMobile ? "justify" : "left"}>
                            <Heading size={'sm'}>Pyladies Data Course</Heading>
                            <Text>Hopefully starting in September.</Text>
                        </Box>
                    </GridItem>
                </Grid>
            </Flex>
        </>
    )
}

export default Scroll

