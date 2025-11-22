import React from 'react'
import styles from './Section1L.module.css'
import img from '../../../../public/Mask group (39).png'
import img1 from '../../../../public/Group 81.png'
const Section1L = () => {
  return (
    <div className={styles.sec_one_all}>
      <div className={styles.sec_one}>
        <div className={styles.fortext}>
            <p style={{fontSize:"80px"}}>Звуковая медитация с <br /> поющими чашами из Непала <br /> и гонгом</p>
            <div className={styles.fordiv}>
                <div><img src={img} alt="" /></div>
                <div className={styles.fordivdiv}>
                    <p>Алеся Капитонова</p>
                    <p>Выпускница Международной Федерации Йоги PIYF</p>
                </div>
            </div>
        </div>
            <div className={styles.twodiv}>
                <div><img src={img1} alt="" /></div>
                <p>Четверг 4 мая    10:00</p>
                <button>Забронировать урок</button>
            </div>

      </div>
    </div>
  )
}

export default Section1L
