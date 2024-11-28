import React from 'react'
import light from '../../images/icon-sun.svg'
import dark from '../../images/icon-moon.svg'
import './header.css'

type HeaderProps = {
    darkMode : boolean;
    toggleDarkMode:() => void
}

const Header = (props: HeaderProps) => {
  return (
    <div className='header'>
        <h1 className='sitename'>開発者検索</h1>
        <button onClick={props.toggleDarkMode} className='theme-toggle'>
        {props.darkMode ? 'ライト' : 'ダーク'}
        {props.darkMode ? <img src={light} alt="" /> : <img src={dark} alt="" />}
        </button>
    </div>
  )
}

export default Header