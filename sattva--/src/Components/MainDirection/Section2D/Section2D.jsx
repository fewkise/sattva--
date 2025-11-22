import React, { useState } from 'react'
import styles from './Section2D.module.css'

import teach1 from '../../../../public/Rectangle 5 (2).png'
import teach2 from '../../../../public/Rectangle 6.png'
import arrow1 from '../../../../public/Polygon 5.png'
import arrow2 from '../../../../public/Polygon 5 (1).png'

const Section2D = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const slidesData = [
    { img: teach1, name: 'Анна Кретова', bio: 'Сертифицированный преподаватель freedomDANCE (level 1) С 2011 года опыт персональной практики осознанного движения школ 5Rythms и freedomDANCE' },
    { img: teach1, name: 'Иван Петров', bio: 'Опытный практик йоги и медитации с 15-летним стажем. Ведет классы по хатха-йоге и осознанности.' },
    { img: teach1, name: 'Елена Смирнова', bio: 'Инструктор по пилатесу и функциональному тренингу. Помогает восстановить тело и укрепить мышцы.' },
    { img: teach1, name: 'Алексей Козлов', bio: 'Мастер по цигун и тайцзицюань. Практикует восточные единоборства более 20 лет.' },
    { img: teach1, name: 'Мария Федорова', bio: 'Психолог и преподаватель медитации осознанности (mindfulness). Работает с эмоциональным интеллектом.' },
  ]

  const totalSlides = slidesData.length
  
  const goToPrevSlide = () => {

    setCurrentSlideIndex((prevIndex) => (prevIndex === 0 ? totalSlides - 1 : prevIndex - 1))
  }


  const goToNextSlide = () => {

    setCurrentSlideIndex((prevIndex) => (prevIndex === totalSlides - 1 ? 0 : prevIndex + 1))
  }



  const progressPercentage = ((currentSlideIndex + 1) / totalSlides) * 100


  const currentSlide = slidesData[currentSlideIndex]

  return (
    <div className={styles.sec_two_all}>
        <div className={styles.sec_two}>
            <div className={styles.daycontainer}>
                <div className={styles.day}>
                  <p>Преподаватели</p>
                  <div></div>
                </div>
            </div>

            <div className="slider">
                <div className={styles.slide}>
                    <div>
                        <img src={currentSlide.img} alt={currentSlide.name} />
                    </div>
                    <div className={styles.foropis}>
                        <p style={{fontSize:"57px"}}>{currentSlide.name}</p>
                        <p style={{fontSize:"22px"}}>{currentSlide.bio}</p>
                        
                        <div className={styles.navigation}>
                            <div className={styles.navbtns}>
                                <button onClick={goToPrevSlide} className={styles.prev}>
                                  <div>
                                    <img src={arrow1} alt="prev" />
                                  </div>
                                </button>
                                <button onClick={goToNextSlide} className={styles.next}>
                                  <div>
                                    <img src={arrow2} alt="next" />
                                  </div>
                                </button>
                            </div>
                            <div style={{ backgroundColor: '#B0BFD0' }} className={styles.forline}>
                                <div
                                  style={{
                                    height: '4px',
                                    backgroundColor: '#36B9EB',
                                    width: `${progressPercentage}%`,
                                    transition: 'width 0.3s ease',
                                  }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Section2D