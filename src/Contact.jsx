import React, {useState, useEffect} from "react";
import {
    Flex,
    Heading,
} from "@chakra-ui/react";

const Skills = ({isMobile, viewportHeight, contactRef}) => {
    return (
        <Flex ref={contactRef} style={!isMobile && viewportHeight>=665?{ scrollSnapAlign: 'start', height: '100vh'}: null} position={'relative'} flexDir={'column'} >
            <Flex maxW="75%" py={'30px'} m={'auto'}>
                <Heading  size="xl">
                    Contact and more information
                </Heading>
            </Flex>
        </Flex>

    )
}

export default Skills
