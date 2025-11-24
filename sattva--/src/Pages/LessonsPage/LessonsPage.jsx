import React from 'react'
import styles from './LessonsPage.module.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import MainLessons from '../../Components/MainLessons/MainLessons'
const LessonsPage = () => {
  return (
    <div>
      <Header/>
      <MainLessons/>
      <Footer/>
    </div>
  )
}

export default LessonsPage
