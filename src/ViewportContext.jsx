import {createContext, useEffect, useState} from "react";

export const ViewportContext = createContext()

export const ViewportProvider = ({children}) => {
    const [viewportHeight, setViewportHeight] = useState(null)
    const [viewportWidth, setViewportWidth] = useState(null)

    useEffect(() => {
        setViewportHeight(visualViewport.height)
        setViewportWidth(visualViewport.width)
    }, [])

    visualViewport.onresize = () => {
        setViewportHeight(visualViewport.height)
        setViewportWidth(visualViewport.width)
    }
    return (
        <ViewportContext.Provider value={{viewportWidth, viewportHeight}}>
            {children}
        </ViewportContext.Provider>
    )
}