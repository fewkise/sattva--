import React from 'react'
import styles from './Section7.module.css'
import img1 from '../../../../public/Знімок екрана 2023-05-01 о 13.41 1.png'
import img2 from '../../../../public/Знімок екрана 2023-05-01 о 13.41 1 (1).png'
const Section7 = () => {
  return (
    <div className={styles.sec_seven_all}>
      <div className={styles.sec_seven}>
        <div className={styles.daycontainer}>
                        <div className={styles.day}>
                          <p>Мероприятия</p>
                        </div>
                        <div className={styles.forbtns}>
                          <button>
                        <p>Все мероприятия</p>
                      </button>
                  </div>
            </div>
            <div className={styles.events}>
              <div className={styles.event}>
                <div className={styles.fortext}>
                  <p>Танцевальная <br /> медитация Freedom Dance с Анной Кретовой</p>
                  <p>Четверг 4 мая    10:00</p>
                  <p>На занятии #freedomDANCE мы создаем и переживаем собственный танец как уникальный опыт. Мы двигаемся, следуя интуитивной логике, проходя танцевальный цикл как метафору жизни</p>
                  <div className={styles.forbtns}>
                    <button>Больше о мероприятии</button>
                    <button>Записаться</button>
                  </div>
                </div>
                <div>
                  <img src={img1} alt="" />
                </div>
              </div>
              <div className={styles.event}>
                <div className={styles.fortext}>
                  <p>Знакомство с глубокими <br />
методами медитации, 
пробуждения своей <br />
изначальной природы.</p>
                  <p>Четверг 4 мая    10:00</p>
                  <p>Эти встречи мы специально организовываем для тех, кто только начинает свой путь в самоисследовании. Для тех, кого интересует медитация как метод познания самого себя, своей изначальной природы. </p>
                  <div className={styles.forbtns}>
                    <button>Больше о мероприятии</button>
                    <button>Записаться</button>
                  </div>
                </div>
                <div>
                  <img src={img2} alt="" />
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default Section7
