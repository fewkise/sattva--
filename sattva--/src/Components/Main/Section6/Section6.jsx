import React from 'react'
import styles from './Section6.module.css'
import img1 from '../../../../public/Mask group (36).png'
import img2 from '../../../../public/Mask group (37).png'
import img3 from '../../../../public/Mask group (38).png'
const Section6 = () => {
  return (
    <div className={styles.sec_six_all}>
      <div className={styles.sec_six}>
        <div className={styles.daycontainer}>
                  <div className={styles.day}>
                    <p>Виды занятий</p>
                    <div></div>
                  </div>
                  <div className={styles.forbtns}>
                    <button>
                      <p>Все абонементы</p>
                    </button>
                    </div>
        </div>
        <div className={styles.lectionsall}>
            <div className={styles.secs}>
                <div className={styles.forimg}>
                    <div><img src={img1} alt="" /></div>
                    <p style={{position:"absolute",alignSelf:"center", color:"white", fontSize:"56px"} }>Индивидуально</p>
                </div>
                <p  style={{color:"#6B7276"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <button>Смотреть варианты</button>
            </div>
            <div className={styles.secs}>
                <div className={styles.forimg}>
                    <div><img src={img2} alt="" /></div>
                    <p style={{position:"absolute",alignSelf:"center", color:"white", fontSize:"56px"} }>Многоразовые</p>
                </div>
                <p  style={{color:"#6B7276"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <button>Смотреть варианты</button>
            </div>
            <div className={styles.secs}>
                <div className={styles.forimg}>
                    <div><img src={img3} alt="" /></div>
                    <p style={{position:"absolute",alignSelf:"center", color:"white", fontSize:"56px"} }>Одноразовые</p>
                </div>
                <p style={{color:"#6B7276"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <button>Смотреть варианты</button>
            </div>
        </div>
        <div className={styles.arenda}>
            <p>Аренда залов</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            <button>Арендовать зал</button>
        </div>
      </div>
    </div>
  )
}

export default Section6
