import React from 'react'
import styles from './Header.module.css'
import logo from '../../../public/7 1 (1).png'
import btnstrelka from '../../../public/Polygon 1.png'
import {NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to='/'><div><img style={{mixBlendMode:"darken"}} src={logo} alt="" /></div></NavLink>
        <ul>
            <NavLink to='/Naprav'><li><p>Направления</p></li></NavLink>
            <NavLink to='/Direction'><li><p>Преподаватели</p></li></NavLink>
            <NavLink><li><p>Прайслист</p><button><div><img src={btnstrelka} alt="" /></div></button></li></NavLink>
            <NavLink><li><p>О нас</p><button><div><img src={btnstrelka} alt="" /></div></button></li></NavLink>
            <NavLink><li><p>Контакты</p></li></NavLink>
        </ul>
        <div className={styles.location}>
            <button><p>Москва</p><div><img src={btnstrelka} alt="" /></div></button>
            <div style={{display:"none"}}>
            <button>Москва</button>
            <button>бронницы</button>
            </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
