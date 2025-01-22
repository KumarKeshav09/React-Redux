import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext({
    themeMode: "light",
    darkMode : () => {},
    lightMode : () => {}
})

export function ThemeProvider({children}) {
    const [themeMode, setThemeMode] = useState("light")
    const darkMode =() => {setThemeMode("dark")}
    const lightMode =() => {setThemeMode("light")}

    useEffect(() => {
        document.querySelector("html").classList.remove("dark","light")
        document.querySelector("html").classList.add(themeMode)
    }, [themeMode])

    console.log("themeMode ---->",themeMode)

    return(
        <ThemeContext.Provider value={{themeMode, darkMode, lightMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default function useTheme(){
    return useContext(ThemeContext)
}