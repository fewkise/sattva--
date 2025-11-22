import React from 'react'
import styles from './MainLessons.module.css'
import Section1L from './Section1L/Section1L'
import Section2L from './Section2L/Section2L'
import Section3L from './Section3L/Section3L'
import Section4L from './Section4L/Section4L'
const MainLessons = () => {
  return (
    <div>
      <Section1L/>
      <Section2L/>
      <Section3L/>
      <Section4L/>
    </div>
  )
}

export default MainLessons
