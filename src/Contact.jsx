import React, {useState, useEffect} from "react";
import {
    Badge,
    Box,
    Flex, GridItem,
    Heading, Link, SimpleGrid, Text,
} from "@chakra-ui/react";

const Contact = ({isMobile, viewportHeight, colorScheme, darkColor, contactRef}) => {
    return (
        <Flex ref={contactRef}
            bg={'white'}
              style={!isMobile && viewportHeight >= 665 ? {scrollSnapAlign: 'start', height: '100vh'} : null}
              position={'relative'} flexDir={'column'}>
            <Flex maxW="25%" py={'30px'} m={'auto'} mt={'50px'} flexDir={'column'} justify={"flex-start"}>
                    <Heading py={'30px'} size="xl" textAlign={'center'}>
                        More information
                    </Heading>
                <Box boxShadow={"md"} rounded={"lg"} shadow={`3px 4px 10px ${darkColor}`}>
                    <SimpleGrid columns={2} spacing={10} minChildWidth={'200px'} m={'30px'}>
                        <GridItem>
                            <Heading fontSize={'xl'} mb={'10px'}>
                                Contact
                            </Heading>
                            <Text>markaczova@gmail.com</Text>
                            <Badge colorScheme={colorScheme} px={2} rounded={'full'}>
                            <Link href={'https://github.com/Mczella'} isExternal>GitHub</Link>
                            </Badge>
                            <Text></Text>
                            <Badge colorScheme={colorScheme} px={2} rounded={'full'}>
                            <Link href={'https://linkedin.com/in/michaela-markaczova'} isExternal>LinkedIn</Link>
                            </Badge>
                        </GridItem>
                        <GridItem>
                            <Heading fontSize={'xl'} mb={'10px'}>
                                My motivation
                            </Heading>
                            <Text py={'10px'} textAlign={'justify'}>
                                I'd greatly appreciate the chance to be a part of the mentoring program. My goal is to
                                advance my React skills, especially with concepts like hooks, state management tools,
                                testing
                                and TypeScript. I find it great that the program can be tailored to my skill level and
                                lets me learn at my own pace. Having guidance would be incredibly valuable, and I'm
                                genuinely excited about the opportunity!
                            </Text>
                        </GridItem>
                    </SimpleGrid>
                </Box>
            </Flex>
        </Flex>

    )
}

export default Contact
