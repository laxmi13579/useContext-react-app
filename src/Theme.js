import React, { useContext } from 'react'
import { ThemeContext, ThemeUpdateContext } from './ThemeContext'


function Theme() {
    const dark = useContext(ThemeContext);
    const themeHandler = useContext(ThemeUpdateContext);

    const style = {
        background: dark? '#F0F0ED' : 'black',
        color: dark ? 'black' : '#F0F0ED',
        padding: '2rem' ,
        margin: '2rem',
    }

  return (
    <>
        <button onClick={themeHandler}>toggle</button>
        <div style={style}> 
            <p>Hey!!</p>
        </div>
    </>
  )
}

export default Theme