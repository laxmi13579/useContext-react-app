import React, { createContext, useState } from 'react'

export const ThemeContext = createContext();
export const ThemeUpdateContext = createContext();


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