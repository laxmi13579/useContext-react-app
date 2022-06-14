import React, { createContext, useContext, useState } from 'react'

const ThemeContext = createContext();
const ThemeUpdateContext = createContext();

export function useThemeContext(){
    return useContext(ThemeContext);
}

export function useThemeUpdateContext(){
    return useContext(ThemeUpdateContext);
}
export function ThemeProvider({children}) {

    const [dark, setDark] = useState(false);

    function themeHandler(){
        setDark(prevDark => ! prevDark);
    }
    return (
        <ThemeContext.Provider value={dark}>
            <ThemeUpdateContext.Provider value={themeHandler}>
                {children}
            </ThemeUpdateContext.Provider>
        </ThemeContext.Provider>
    )
}