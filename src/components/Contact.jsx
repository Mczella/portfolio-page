import React, {useContext} from "react";
import {Badge, Box, Circle, Flex, GridItem, Heading, Link, SimpleGrid, Text,} from "@chakra-ui/react";
import {ViewportContext} from "../contexts/ViewportContext";
import {ColorThemeContext} from "../contexts/ColorThemeContext";

const Contact = ({contactRef}) => {
    const {viewportHeight, isMobile} = useContext(ViewportContext)
    const {chosenColorScheme, chosenColor} = useContext(ColorThemeContext)

    return (
        <Flex ref={contactRef}
              bg={'white'}
              style={!isMobile && viewportHeight >= 665 ? {scrollSnapAlign: 'start', height: '100vh'} : null}
              position={'relative'} flexDir={'column'} alignItems={'center'} pb={'100px'}>
            <Circle
                mt={'60px'}
                ml={[0, '240px', '400px', '550px']}
                bg={chosenColor}
                size={['180px', '180px', '230px']}
                color={'white'}
                position={'absolute'}
            >
                <Heading p={'10px'} size="lg" textAlign={'center'}>
                    More information
                </Heading>
            </Circle>
            <Flex maxW={['85%', "75%"]} py={'30px'} m={'auto'} mt={['250px', '150px']} flexDir={'column'}
                  justify={"flex-start"}>
                <Box borderWidth='1px' rounded={"lg"}>
                    <SimpleGrid columns={1} spacing={10} minChildWidth={['200px', '200px', '400px']}
                                m={['15px', '25px', '30px']} maxWidth={['400px', '400px', '800px']}>
                        <GridItem>
                            <Heading fontSize={'xl'} mb={'10px'}>
                                Contact
                            </Heading>
                            <Text>markaczova@gmail.com</Text>
                            <Badge colorScheme={chosenColorScheme} px={2} rounded={'full'}>
                                <Link href={'https://github.com/Mczella'} isExternal>GitHub</Link>
                            </Badge>
                            <Text></Text>
                            <Badge colorScheme={chosenColorScheme} px={2} rounded={'full'}>
                                <Link href={'https://linkedin.com/in/michaela-markaczova'} isExternal>LinkedIn</Link>
                            </Badge>
                        </GridItem>
                        <GridItem>
                            <Heading fontSize={'xl'} mb={'10px'}>
                                My motivation
                            </Heading>
                            <Text py={'10px'} textAlign={isMobile ? 'left' : 'justify'}>
                                I'd greatly appreciate the chance to be a part of the mentoring program. My goal is to
                                advance my React skills, especially with concepts like hooks, state management tools,
                                testing
                                and TypeScript. I find it great that the program can be tailored to my skill level and
                                lets me learn at my own pace. Having guidance would be incredibly valuable, and I'm
                                excited about the opportunity!
                            </Text>
                        </GridItem>
                    </SimpleGrid>
                </Box>
            </Flex>
        </Flex>

    )
}

export default Contact
