import React, {useState, useEffect} from "react";
import {
    Flex,
    Heading,
} from "@chakra-ui/react";

const Skills = ({isMobile, viewportHeight}) => {
    return (
        <Flex style={!isMobile && viewportHeight>=575?{ scrollSnapAlign: 'start', height: '100vh'}: null} position={'relative'} flexDir={'column'} >
            <Flex maxW="75%" py={'30px'} m={'auto'}>
                <Heading  size="xl">
                    Contact and more informations
                </Heading>
            </Flex>
        </Flex>

    )
}

export default Skills
