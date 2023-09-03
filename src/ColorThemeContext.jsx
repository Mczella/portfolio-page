import {createContext, useState} from "react"

const colorThemes = {
    'red': {
        colorScheme: 'red',
        color: '#b90202',
        darkColor: '#850000'
    },
    'pink': {
        colorScheme: 'pink',
        color: '#ce016d',
        darkColor: '#810042'
    },
    'blue': {
        colorScheme: 'blue',
        color: '#0153ce',
        darkColor: '#003886'
    },
    'green': {
        colorScheme: 'green',
        color: '#159b00',
        darkColor: '#0e6701'
    },
    'purple': {
        colorScheme: 'purple',
        color: '#6701bb',
        darkColor: '#44007c'
    },
    'orange': {
        colorScheme: 'orange',
        color: '#ce6801',
        darkColor: '#8c4601'
    },
    'teal': {
        colorScheme: 'teal',
        color: '#01b69b',
        darkColor: '#017a6a'
    },
    'cyan': {
        colorScheme: 'cyan',
        color: '#01c7ce',
        darkColor: '#00787c'
    },
    'yellow': {
        colorScheme: 'yellow',
        color: '#dcb001',
        darkColor: '#b48f01'
    }
}

const getRandomColor = (colorThemes) => {
    const colors = Object.keys(colorThemes)
    const randomColor = colors[Math.floor(Math.random() * colors.length)]

    console.log(randomColor)
    return randomColor
}

export const ColorThemeContext = createContext()

export const ColorThemeProvider = ({children}) => {
    const [colorTheme, setColorTheme] = useState('pink')
    const handleColorChange = () => {
        let randomColor
        do {
            randomColor = getRandomColor(colorThemes)
        } while (randomColor === colorTheme)
        setColorTheme(randomColor)
    }

    const chosenColorScheme = colorThemes[colorTheme]?.colorScheme
    const chosenColor = colorThemes[colorTheme]?.color
    const chosenDarkColor = colorThemes[colorTheme]?.darkColor



    return (
        <ColorThemeContext.Provider value={{chosenColorScheme, chosenColor, chosenDarkColor, handleColorChange, colorTheme}}>
            {children}
        </ColorThemeContext.Provider>
    )
}