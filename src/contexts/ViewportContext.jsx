import {createContext, useEffect, useState} from "react";
import {useBreakpointValue} from "@chakra-ui/react";

export const ViewportContext = createContext()

export const ViewportProvider = ({children}) => {
    const [viewportHeight, setViewportHeight] = useState(null)
    const [viewportWidth, setViewportWidth] = useState(null)
    const [isMobile, setIsMobile] = useState(false)
    const [isHuge, setIsHuge] = useState(false)

    const deviceSize = useBreakpointValue({
        base: 'smallest',
        sm: 'small',
        md: 'medium',
        lg: "large",
        xl: 'extra large',
        '2xl': 'huge'
    })
    useEffect(() => {
        setViewportHeight(visualViewport.height)
        setViewportWidth(visualViewport.width)
    }, [])

    visualViewport.onresize = () => {
        setViewportHeight(visualViewport.height)
        setViewportWidth(visualViewport.width)
    }

    useEffect(() => {
        setIsMobile(
            deviceSize === "medium" ||
            deviceSize === "smallest" ||
            deviceSize === "small"
        )
        setIsHuge(deviceSize === "huge")
    }, [deviceSize])
    return (
        <ViewportContext.Provider value={{viewportWidth, viewportHeight, isMobile, isHuge}}>
            {children}
        </ViewportContext.Provider>
    )
}