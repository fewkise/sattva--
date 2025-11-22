import React from 'react'
import styles from './Header.module.css'
import logo from '../../../public/7 1 (1).png'
import btnstrelka from '../../../public/Polygon 1.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className={styles.headerall}>
      <nav>
        <Link to='/'><div><img style={{mixBlendMode:"darken"}} src={logo} alt="" /></div></Link>
        <ul>
            <Link to='/Naprav'><li><p>Направления</p></li></Link>
            <Link to='/Direction'><li><p>Преподаватели</p></li></Link>
            <li><p>Прайслист</p><button><div><img src={btnstrelka} alt="" /></div></button></li>
            <li><p>О нас</p><button><div><img src={btnstrelka} alt="" /></div></button></li>
            <li><p>Контакты</p></li>
        </ul>
        <div className={styles.location}>
            <button><p>Москва</p><div><img src={btnstrelka} alt="" /></div></button>
            <div style={{display:"none"}}>
            <button>Москва</button>
            <button>бронницы</button>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
