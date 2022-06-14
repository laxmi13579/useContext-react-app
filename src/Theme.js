import React from 'react'
import {  useThemeContext, useThemeUpdateContext } from './ThemeContext'


function Theme() {
    const dark = useThemeContext();
    const themeHandler = useThemeUpdateContext();

    const style = {
        background: dark? '#F0F0ED' : 'black',
        color: dark ? 'black' : '#F0F0ED',
        padding: '2rem' ,
        margin: '2rem',
    }

  return (
    <>
        <button onClick={themeHandler}>toggle</button>
        <div style={style}> Welcome!</div>
    </>
  )
}

export default Theme