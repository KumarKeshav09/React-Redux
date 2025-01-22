import React from 'react'
import useTheme from '../context/theme'

function ThemeBtn() {
    const {themeMode, darkMode, lightMode} = useTheme()
    const onChangeBtn = (e) => {
        const darkModeStatus = e.currentTarget.checked
        if(darkModeStatus){
            darkMode()
        } else {
            lightMode();
        }
    }
  return (
    <div>
        <input
        type='checkbox'
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
        />
    </div>
  )
}

export default ThemeBtn