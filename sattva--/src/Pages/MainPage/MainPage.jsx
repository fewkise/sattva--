import React from 'react'
import styles from './MainPage.module.css'
import Header from '../../Components/Header/Header'
import Main from '../../Components/Main/Main'
import Footer from '../../Components/Footer/Footer'
const MainPage = () => {
  return (
    <div className={styles.mainpage}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default MainPage
