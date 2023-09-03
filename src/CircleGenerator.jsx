import React, {useContext, useEffect, useMemo, useRef} from "react"
import {ViewportContext} from "./ViewportContext";

const CircleGenerator = ({isMobile, colorTheme}) => {
    const {viewportHeight, viewportWidth} = useContext(ViewportContext)

    const svgRef = useRef(null)
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    const generateRandomCircles = () => {
        const numCircles = generateRandomNumber(4, 7)
        const circles = []

        for (let i = 0; i < numCircles; i++) {
            const radius = generateRandomNumber(10, 200)
            const cx = isMobile? generateRandomNumber(0, 600 - radius) : generateRandomNumber(0, 900)
            const cy = isMobile? generateRandomNumber(0, 900) : generateRandomNumber(0, 600 - radius)

            if (circles.length === 0) {
                circles.push({ cx, cy, radius })
            } else {

                const overlapping = circles.some((circle) => {
                    const dx = circle.cx - cx
                    const dy = circle.cy - cy
                    const distance = Math.sqrt(dx * dx + dy * dy)
                    return distance < circle.radius + radius

                })
                if (!overlapping) {
                    circles.push({ cx, cy, radius })
                }
            }

        }

        console.log({circles})

        return circles
    }

    useEffect(() => {
        const circles = generateRandomCircles()
        const svg = svgRef.current

        circles.forEach(({ cx, cy, radius }) => {
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
            circle.setAttribute("r", radius)
            circle.setAttribute("cx", cx)
            circle.setAttribute("cy", cy)
            circle.setAttribute("fill", "#ffffff")
            svg.appendChild(circle)
        })

        return () => {
            svg.innerHTML = ''
        }
    }, [colorTheme])

    const viewBox = isMobile? `0 0 ${viewportWidth} ${viewportHeight}` : `0 0 900 600`

    return (
        <svg opacity="0.2" fill="#ffffff" id="visual" viewBox={viewBox} ref={svgRef}>
   
        </svg>
    )
}

export default CircleGenerator
