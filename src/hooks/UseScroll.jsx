import { useRef } from 'react'

const useScroll = () => {
    const componentRef = useRef(null)

    const scrollToComponent = () => {
        if (componentRef.current) {
            componentRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            })
        }
    }

    return [componentRef, scrollToComponent]
}

export default useScroll