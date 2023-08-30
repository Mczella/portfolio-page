import {useAnimate} from "framer-motion";
import {useEffect} from "react";
import {SimpleGrid} from "@chakra-ui/react";

const Animation = ({ children }) => {
    const [scope, animate] = useAnimate()
    useEffect(() => {
        animate(
            "path",
            { opacity: [0, 1] },
            { duration: 4, delay: 1 }
        );
    }, [])

    return <SimpleGrid ref={scope}>{children}</SimpleGrid>
}

export default Animation